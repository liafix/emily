'use client';
import { motion } from 'motion/react';
import { invitationConfig } from '@/content/config';
import { storyCopy } from '@/content/copy';
import { Action, SmallMark } from '@/components/ui/Elements';

const fields = [
  ['ADRESÁT', 'Emily'], ['OBLASŤ', 'Ekonomika a účtovníctvo'], ['ŽIADATEĽ', 'Ja'], ['STAV', 'Čaká na tvoje vyjadrenie'],
];
export default function Dossier({ onNext, reduced }: { onNext: () => void; reduced: boolean }) {
  const c = storyCopy.dossier;
  return <section className="scene scene-dossier" aria-labelledby="dossier-title">
    <div className="scene-copy dossier-copy">
      <SmallMark>02 / A LITTLE REQUEST</SmallMark>
      <h1 className="display display-large" id="dossier-title">Jedna <em>malá</em> konzultácia.</h1>
      <p className="body-copy">{c.intro}</p>
      <p className="body-copy muted-copy">{c.aside}</p>
      <Action onClick={onNext}>{c.action}</Action>
    </div>
    <motion.div className="dossier-wrap" initial={reduced?false:{opacity:0,rotateY:-9,rotateX:5,y:38}} animate={{opacity:1,rotateY:0,rotateX:0,y:0}} transition={{duration:1.1,ease:[.22,1,.36,1]}}>
      <div className="dossier-behind" aria-hidden="true"/>
      <div className="dossier-paper">
        <div className="paper-top"><span>PRIVATE DOCUMENT</span><span>REF. {invitationConfig.reference}</span></div>
        <div className="paper-monogram" aria-hidden="true">E<span>✳</span></div>
        <div className="paper-title">OFICIÁLNA ŽIADOSŤ<br/>O KONZULTÁCIU</div>
        <div className="paper-rule"/>
        <dl className="paper-fields">{fields.map(([key,value],i)=><motion.div key={key} initial={reduced?false:{opacity:0,x:14}} animate={{opacity:1,x:0}} transition={{delay:.36+i*.14,duration:.5}}><dt>{key}</dt><dd>{value}</dd></motion.div>)}</dl>
        <div className="paper-question">{invitationConfig.accountingQuestion ? <>TÉMA: {invitationConfig.accountingQuestion}</> : <>TÉMA: jedna ekonomická otázka, o ktorej sa rád poradím osobne.</>}</div>
        <div className="paper-bottom"><span>FOR YOUR CONSIDERATION</span><span className="stamp">PENDING<br/>REVIEW</span></div>
      </div>
      <span className="dossier-serial" aria-hidden="true">DOCUMENT FILED — NO. E–001</span>
    </motion.div>
  </section>;
}
