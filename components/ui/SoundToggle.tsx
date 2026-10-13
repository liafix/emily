'use client';
import { useEffect, useRef, useState } from 'react';
import { invitationConfig } from '@/content/config';

type Voice = { context: AudioContext; tones: OscillatorNode[]; gain: GainNode };

export default function SoundToggle() {
  const [enabled, setEnabled] = useState(false);
  const [available, setAvailable] = useState(true);
  const voices = useRef<Voice | null>(null);
  const fileAudio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => () => {
    if (fileAudio.current) { fileAudio.current.pause(); fileAudio.current.src = ''; }
    const voice = voices.current;
    if (voice) { voice.tones.forEach(t => { try { t.stop(); } catch { /* already stopped */ } }); void voice.context.close(); }
  }, []);

  async function toggle() {
    if (enabled) {
      if (fileAudio.current) fileAudio.current.pause();
      if (voices.current) { const { context, gain } = voices.current; gain.gain.setTargetAtTime(0, context.currentTime, 0.06); }
      setEnabled(false);
      return;
    }
    try {
      if (invitationConfig.audioFile) {
        if (!fileAudio.current) { fileAudio.current = new Audio(invitationConfig.audioFile); fileAudio.current.loop = true; fileAudio.current.volume = .16; }
        await fileAudio.current.play();
      } else {
        if (!voices.current) {
          const context = new AudioContext();
          const gain = context.createGain(); gain.gain.value = 0; gain.connect(context.destination);
          const tones = [174.61, 261.63, 349.23].map((frequency, i) => {
            const oscillator = context.createOscillator(); oscillator.type = i === 2 ? 'triangle' : 'sine'; oscillator.frequency.value = frequency;
            const envelope = context.createGain(); envelope.gain.value = i === 0 ? .2 : i === 1 ? .08 : .035;
            oscillator.connect(envelope).connect(gain); oscillator.start(); return oscillator;
          });
          voices.current = { context, gain, tones };
        }
        await voices.current.context.resume();
        voices.current.gain.gain.setTargetAtTime(.14, voices.current.context.currentTime, .9);
      }
      setEnabled(true);
    } catch {
      setAvailable(false);
      setEnabled(false);
    }
  }
  return <button className="sound-toggle" type="button" aria-pressed={enabled} onClick={toggle} title="Voliteľný zvuk" disabled={!available}>
    <span className={`sound-bars ${enabled ? 'on' : ''}`} aria-hidden="true"><i/><i/><i/><i/></span>
    <span>{!available ? 'ZVUK NEDOSTUPNÝ' : enabled ? 'ZVUK ZAP.' : 'ZVUK VYP.'}</span>
  </button>;
}
