'use client';
import { motion } from 'motion/react';
import { storyCopy } from '@/content/copy';
import { Action, SmallMark } from '@/components/ui/Elements';

const entries=[['PREDMET','Osobná konzultácia','01'],['ROZPOČET','Dve kávy','02'],['HLAVNÉ TÉMY','Ekonomika, hudba a čokoľvek ďalšie','03'],['OČAKÁVANÝ VÝSLEDOK','Príjemný rozhovor','04']];
export default function Analysis({ onNext, reduced }: { onNext: () => void; reduced: boolean }) {
  const c=storyCopy.analysis;
  return <section className="scene scene-analysis" aria-labelledby="analysis-title">
    <div className="scene-copy analysis-copy">
      <SmallMark>04 / THE FINANCIAL ANALYSIS</SmallMark>
      <h1 className="display display-large" id="analysis-title">Má to svoj<br/><em>potenciál.</em></h1>
      <p className="body-copy">{c.intro}<br/>{c.ending}</p>
      <Action onClick={onNext}>{c.action}</Action>
    </div>
    <motion.div className="analysis-sheet" initial={reduced?false:{opacity:0,scale:.94,y:35}} animate={{opacity:1,scale:1,y:0}} transition={{duration:.8,ease:[.22,1,.36,1]}}>
      <div className="analysis-meta"><span>FINANCIAL MEMO / 002</span><span>PERSONAL USE ONLY</span></div>
      <div className="analysis-heading"><span className="analysis-spark" aria-hidden="true">✳</span><div><span>PROJECT</span><h2>COFFEE<br/><i>with Emily.</i></h2></div></div>
      <div className="analysis-data">{entries.map(([label,value,index],i)=><motion.div key={label} className="analysis-row" initial={reduced?false:{opacity:0,x:16}} animate={{opacity:1,x:0}} transition={{delay:.16+i*.12,duration:.6}}><span className="analysis-index">{index}</span><span className="analysis-label">{label}</span><strong>{value}</strong></motion.div>)}</div>
      <div className="analysis-conclusion"><span className="analysis-mini-label">FINAL RECOMMENDATION</span><p>Ask Emily<br/><em>in person.</em></p><span className="analysis-sign" aria-hidden="true">e.</span></div>
      <span className="sheet-foot">THIS IS NOT FINANCIAL ADVICE — JUST A REASON TO TALK.</span>
    </motion.div>
  </section>;
}
