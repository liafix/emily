'use client';
import { motion } from 'motion/react';
import { storyCopy } from '@/content/copy';
import { Action, SmallMark } from '@/components/ui/Elements';
import { IntroArtwork } from '@/components/visuals/Artwork';

export default function Arrival({ onNext, reduced }: { onNext: () => void; reduced: boolean }) {
  const c = storyCopy.arrival;
  return <section className="scene scene-arrival" aria-labelledby="arrival-title">
    <div className="scene-copy entrance-copy">
      <motion.div initial={reduced?false:{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{duration:.6}}><SmallMark>PERSONAL TRANSMISSION / 001</SmallMark></motion.div>
      <motion.h1 id="arrival-title" className="display display-hero" initial={reduced?false:{opacity:0,y:36}} animate={{opacity:1,y:0}} transition={{duration:1,delay:.12}}>{c.name}<span className="rose-period"/></motion.h1>
      <motion.div initial={reduced?false:{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.75,delay:.32}}>
        <h2 className="intro-subtitle">{c.headline}</h2>
        <p className="body-copy">{c.detail}</p>
        <Action onClick={onNext}>{c.action}</Action>
        <p className="footnote">{c.footer}</p>
      </motion.div>
    </div>
    <IntroArtwork/>
    <div className="scene-side-caption" aria-hidden="true">CREATED WITH A LITTLE TOO MUCH EFFORT FOR ONE QUESTION.</div>
  </section>;
}
