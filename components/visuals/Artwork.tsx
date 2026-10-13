'use client';
import { motion, useReducedMotion } from 'motion/react';

export function IntroArtwork() {
  const reduce = useReducedMotion();
  return <div className="intro-art" aria-hidden="true">
    <div className="intro-halo"/>
    <motion.div className="intro-ellipse ellipse-a" animate={reduce ? undefined : { rotate: 360, scaleX: .57 }} transition={{ duration: 75, repeat: Infinity, ease: 'linear' }}/>
    <motion.div className="intro-ellipse ellipse-b" animate={reduce ? undefined : { rotate: -360, scaleX: .64 }} transition={{ duration: 96, repeat: Infinity, ease: 'linear' }}/>
    <div className="intro-core"><span>e.</span></div>
    <div className="intro-cross intro-cross-a"/><div className="intro-cross intro-cross-b"/>
    <div className="intro-art-label">A PRIVATE NOTE</div>
  </div>;
}

export function MusicArtwork() {
  const reduce = useReducedMotion();
  return <div className="details-art art-music" aria-hidden="true">
    <div className="record-orbit orbit-1"/><div className="record-orbit orbit-2"/><div className="record-center"><span>♪</span></div>
    <div className="equalizer">{Array.from({length: 41},(_,i)=><motion.span key={i} style={{ height: `${14 + Math.abs(Math.sin(i*1.4)*Math.cos(i*.42))*86}%` }} animate={reduce ? undefined : { scaleY: [.3, .85 + (i % 5)*.13, .4], opacity:[.3,.85,.3] }} transition={{ duration: 1.15+(i%5)*.28, repeat: Infinity, delay: i*.032, ease: 'easeInOut' }}/>)}</div>
    <span className="art-coordinate">SOUND STUDY — 001</span>
  </div>;
}

export function EyesArtwork() {
  const reduce = useReducedMotion();
  return <div className="details-art art-eyes" aria-hidden="true">
    <motion.div className="eye-luminous" animate={reduce ? undefined : { scale: [1, 1.11, 1], opacity:[.6,.92,.6] }} transition={{duration:5,repeat:Infinity,ease:'easeInOut'}}/>
    <svg className="eye-lines" viewBox="0 0 460 360" fill="none"><ellipse cx="230" cy="177" rx="166" ry="72" stroke="#D6AFC6" strokeOpacity=".34"/><ellipse cx="230" cy="177" rx="129" ry="51" stroke="#F6DFE9" strokeOpacity=".29"/><ellipse cx="230" cy="177" rx="205" ry="104" stroke="#AE849D" strokeOpacity=".16"/><path d="M60 177Q230 49 400 177Q230 308 60 177Z" stroke="#F4D2E4" strokeOpacity=".62" strokeWidth="1.2"/><circle cx="230" cy="177" r="33" stroke="#D6AFC6" strokeOpacity=".4"/><circle cx="230" cy="177" r="4" fill="#EED5E4"/></svg>
    <span className="art-coordinate">LIGHT STUDY — 002</span>
  </div>;
}

export function HairArtwork() {
  const reduce = useReducedMotion();
  return <div className="details-art art-hair" aria-hidden="true">
    <div className="strand-backlight"/>
    <svg className="hair-lines" viewBox="0 0 480 390" fill="none">{Array.from({length:17},(_,i)=> {
      const x=70+i*17;
      return <motion.path key={i} d={`M${x} -12 C${x-85} 125 ${x+104} 190 ${x+25} 410`} stroke={i%4===0?'#EED4E4':'#A57A94'} strokeOpacity={i%4===0?.74:.34} strokeWidth={i%5===0?1.5:.65} animate={reduce ? undefined : { x:[-5,6,-5] }} transition={{ duration:5+(i%6), repeat:Infinity, ease:'easeInOut',delay:-i*.4}}/>;
    })}</svg>
    <span className="art-coordinate">SILHOUETTE STUDY — 003</span>
  </div>;
}

export function InvitationArtwork() {
  const reduce = useReducedMotion();
  return <div className="invitation-art" aria-hidden="true">
    <div className="invitation-bloom"/>
    <motion.div className="invitation-ring ring-one" animate={reduce?undefined:{rotate:360}} transition={{duration:95,repeat:Infinity,ease:'linear'}}/>
    <motion.div className="invitation-ring ring-two" animate={reduce?undefined:{rotate:-360}} transition={{duration:113,repeat:Infinity,ease:'linear'}}/>
    <svg className="invitation-star" viewBox="0 0 170 170" fill="none"><path d="M85 3C86 58 112 84 167 85C112 86 86 112 85 167C84 112 58 86 3 85C58 84 84 58 85 3Z" stroke="#E2BECE" strokeOpacity=".7" strokeWidth=".8"/><circle cx="85" cy="85" r="17" stroke="#DAAAC1" strokeOpacity=".55"/><circle cx="85" cy="85" r="3" fill="#F8EAF0"/></svg>
  </div>;
}
