'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { SCENES, labels, sceneNumber, type Response, type Scene } from '@/lib/experience';
import { Stars } from '@/components/ui/Elements';
import SoundToggle from '@/components/ui/SoundToggle';
import Arrival from '@/components/scenes/Arrival';
import Dossier from '@/components/scenes/Dossier';
import Details from '@/components/scenes/Details';
import Analysis from '@/components/scenes/Analysis';
import Invitation from '@/components/scenes/Invitation';

function UnfoldingLetter({ reduced }: { reduced: boolean }) {
  return <motion.div className="unfold-overlay" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:reduced?0:.26}} aria-hidden="true">
    <div className="unfold-bg"/>
    <div className="unfold-document">
      {Array.from({length:8},(_,i)=><motion.div key={i} className="unfold-strip" style={{top:`${i*12.5}%`}} initial={{x:0,opacity:1,rotate:0}} animate={reduced?{opacity:0}:{x:(i%2===0?-1:1)*(260+i*19),rotate:(i%2===0?-1:1)*(4+i*1.4),opacity:0}} transition={{delay:reduced?0:.25+i*.048,duration:reduced?0:.9,ease:[.64,0,.32,1]}}/>) }
    </div>
    <motion.div className="unfold-flash" initial={{scale:.2,opacity:0}} animate={{scale:[.2,1.2,2.2],opacity:[0,.7,0]}} transition={{duration:reduced?0:1.4,delay:.48}}/>
    <motion.p className="unfold-message" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:reduced?0:.65,delay:reduced?0:.75}}>Some things are better<br/><em>discussed over coffee.</em></motion.p>
  </motion.div>;
}

export default function Experience() {
  const [scene,setScene] = useState<Scene>('arrival');
  const [substep,setSubstep] = useState(0);
  const [response,setResponse] = useState<Response>(null);
  const [unfold,setUnfold] = useState(false);
  const [hydrated,setHydrated] = useState(false);
  const reduce = Boolean(useReducedMotion());
  const timeout = useRef<ReturnType<typeof setTimeout>|null>(null);
  const mainRef = useRef<HTMLElement|null>(null);
  const scenePosition = sceneNumber(scene);
  useEffect(()=>{setHydrated(true);},[]);
  useEffect(()=>()=>{if(timeout.current)clearTimeout(timeout.current);},[]);
  useEffect(()=>{
    mainRef.current?.focus({preventScroll:true});
    window.scrollTo({top:0,behavior:'instant'});
  },[scene]);
  const go = useCallback((next:Scene)=>{
    if(timeout.current){clearTimeout(timeout.current);timeout.current=null;}
    setUnfold(false);
    setScene(next);
    if(next==='details')setSubstep(0);
  },[]);
  function advanceDetails(){if(substep<2)setSubstep(i=>i+1);else go('analysis');}
  function advanceAnalysis(){
    if(reduce){go('invitation');return;}
    if(timeout.current)clearTimeout(timeout.current);
    setUnfold(true);
    timeout.current=setTimeout(()=>{setScene('invitation');setUnfold(false);timeout.current=null;},2050);
  }
  function reset(){setResponse(null);setSubstep(0);go('arrival');}
  return <div className={`experience ${hydrated?'is-ready':''}`}>
    <div className="global-ambient" aria-hidden="true"><div className="ambient-orb orb-left"/><div className="ambient-orb orb-right"/><div className="noise-film"/><Stars/></div>
    <header className="site-header">
      <button className="brand" onClick={reset} aria-label="For Emily, späť na úvod"><span className="brand-emblem">E<span>✳</span></span><span className="brand-name">FOR EMILY<span className="brand-dot">.</span></span></button>
      <div className="header-actions"><span className="header-private">AN INVITATION IN FIVE ACTS</span><SoundToggle/><button className="skip-control" onClick={()=>{setResponse(null);go('invitation');}}>{scene==='invitation'?'POZVANIE':'PREJSŤ NA POZVANIE'} <span aria-hidden="true">↗</span></button></div>
    </header>
    <div className="stage-edge edge-left" aria-hidden="true"><span>EST. 2026</span><span>MADE WITH INTENTION</span></div>
    <div className="stage-edge edge-right" aria-hidden="true"><span>PRIVATE CORRESPONDENCE</span><span>REF. E–001</span></div>
    <main ref={mainRef} id="main-experience" tabIndex={-1} className="stage" aria-label="Osobné pozvanie pre Emily">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={scene} className="scene-container" initial={reduce?false:{opacity:0,y:22}} animate={{opacity:1,y:0}} exit={reduce?{opacity:1}:{opacity:0,y:-17}} transition={{duration:reduce?0:.52,ease:[.22,1,.36,1]}}>
          {scene==='arrival'&&<Arrival reduced={reduce} onNext={()=>go('dossier')}/>}
          {scene==='dossier'&&<Dossier reduced={reduce} onNext={()=>go('details')}/>}
          {scene==='details'&&<Details reduced={reduce} substep={substep} onAdvance={advanceDetails}/>}
          {scene==='analysis'&&<Analysis reduced={reduce} onNext={advanceAnalysis}/>}
          {scene==='invitation'&&<Invitation response={response} setResponse={setResponse}/>}
        </motion.div>
      </AnimatePresence>
    </main>
    <footer className="site-footer"><div className="footer-counter"><span>0{scenePosition}</span><span className="counter-slash">/</span><span className="counter-total">05</span><span className="footer-label">{labels[scenePosition-1]}</span></div>
      <nav className="chapter-track" aria-label="Priebeh príbehu">{SCENES.map((part,i)=><button key={part} type="button" onClick={()=>{setResponse(null);go(part);}} className={`chapter-pill ${i+1<=scenePosition?'is-reached':''} ${i+1===scenePosition?'is-active':''}`} aria-label={`Prejsť na kapitolu ${i+1}: ${labels[i]}`} aria-current={i+1===scenePosition?'step':undefined}/>)}</nav>
      <div className="footer-signature">A LITTLE THING, JUST FOR YOU <span>✳</span></div></footer>
    <p className="sr-only" role="status" aria-live="polite">Kapitola {scenePosition} z 5: {labels[scenePosition-1]}</p>
    <AnimatePresence>{unfold&&<UnfoldingLetter reduced={reduce}/>}</AnimatePresence>
  </div>;
}
