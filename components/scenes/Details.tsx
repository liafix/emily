'use client';
import { AnimatePresence, motion } from 'motion/react';
import { storyCopy } from '@/content/copy';
import { Action, SmallMark } from '@/components/ui/Elements';
import { EyesArtwork, HairArtwork, MusicArtwork } from '@/components/visuals/Artwork';

export default function Details({ substep, onAdvance, reduced }: { substep: number; onAdvance: () => void; reduced: boolean }) {
  const c = storyCopy.details[substep];
  return <section className="scene scene-details" aria-labelledby="details-title">
    <div className="details-panel">
      <div className="details-head"><SmallMark>03 / A FEW THINGS I NOTICED</SmallMark><span className="detail-count">0{substep + 1} / 03</span></div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div className="detail-content" key={substep} initial={reduced?false:{opacity:0,y:30}} animate={{opacity:1,y:0}} exit={reduced?{opacity:1}:{opacity:0,y:-20}} transition={{duration:reduced?0:.55}}>
          <div className="detail-artwork">{c.key==='music'?<MusicArtwork/>:c.key==='eyes'?<EyesArtwork/>:<HairArtwork/>}</div>
          <div className="detail-words">
            <SmallMark>DETAIL {c.index}</SmallMark>
            <h1 id="details-title" className="display display-large">{c.title}</h1>
            <p className="detail-answer">{c.answer}</p>
            {substep===2 && <p className="detail-aside">Dobre, toto už asi nemá s účtovníctvom nič spoločné. 😄</p>}
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="details-bottom"><div className="step-dots" aria-label={`Detail ${substep+1} z 3`}>{[0,1,2].map(i=><span className={i===substep?'active':''} key={i}/>)}</div><Action onClick={onAdvance}>{substep===2?'Späť k serióznym veciam':'Ďalší detail'}</Action></div>
    </div>
  </section>;
}
