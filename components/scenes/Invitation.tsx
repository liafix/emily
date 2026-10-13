'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import { invitationConfig, safeContactUrl } from '@/content/config';
import { storyCopy } from '@/content/copy';
import { Action, SmallMark } from '@/components/ui/Elements';
import { InvitationArtwork } from '@/components/visuals/Artwork';
import type { Response } from '@/lib/experience';

async function copyText(text: string): Promise<boolean> {
  try { if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(text); return true; } } catch { /* fallback below */ }
  try {
    const input = document.createElement('textarea'); input.value = text; input.setAttribute('readonly', ''); input.style.position = 'fixed'; input.style.opacity = '0'; document.body.appendChild(input); input.select();
    const success = document.execCommand('copy'); input.remove(); return success;
  } catch { return false; }
}
export default function Invitation({ response, setResponse }: { response: Response; setResponse: (v: Response) => void }) {
  const c = storyCopy.invitation;
  const [copied, setCopied] = useState<'idle'|'yes'|'no'>('idle');
  const url=safeContactUrl(invitationConfig.contactUrl);
  async function copy() { setCopied((await copyText(invitationConfig.suggestedMessage))?'yes':'no'); }
  return <section className="scene scene-invitation" aria-labelledby="invite-title">
    <InvitationArtwork/>
    <div className="invitation-content">
      <SmallMark>05 / ONE LAST QUESTION</SmallMark>
      {!response ? <motion.div key="question" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
        <h1 className="display display-invite" id="invite-title">Tak čo,<br/><em>Emily?</em></h1>
        <p className="invitation-lead">{c.question}</p>
        <p className="invitation-copy">{c.detail}<br/>{c.honesty}</p>
        <div className="invitation-actions"><Action onClick={()=>setResponse('yes')}>{c.yes} <span aria-hidden="true">☕</span></Action><button className="link-action" onClick={()=>setResponse('maybe')}>{c.maybe}</button><button className="link-action link-subtle" onClick={()=>setResponse('no')}>{c.no}</button></div>
      </motion.div> : <motion.div key={response} initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.55}} className="response-content">
        <h1 id="invite-title" className="display display-response">{response==='yes'?'Tak to ma potešilo.':response==='maybe'?'Jasné, úplne v pohode.':'V pohode, rozumiem.'}</h1>
        <p className="invitation-lead">{response==='yes'?'Napíš mi a nejako sa dohodneme.': 'Ďakujem, že si si to pozrela. :)'}</p>
        {response==='yes' && <><p className="invitation-copy">Kávu beriem na seba.</p>
          <div className="response-actions">
            {url && <a className="cta cta-primary" href={url} target={url.startsWith('https:')?'_blank':undefined} rel={url.startsWith('https:')?'noopener noreferrer':undefined}>{invitationConfig.contactLabel}<span aria-hidden="true">↗</span></a>}
            <button className="cta cta-quiet" onClick={copy}>{copied==='yes'?'Správa skopírovaná ✓':'Skopírovať správu'}<span aria-hidden="true">↗</span></button>
          </div>
          {copied==='no' && <div className="copy-fallback"><p>Automatické kopírovanie nie je dostupné. Označ a skopíruj túto správu:</p><textarea readOnly aria-label="Text správy" value={invitationConfig.suggestedMessage} onFocus={e=>e.currentTarget.select()} /></div>}
          {!url && <p className="contact-note">Kontaktný odkaz ešte nie je nastavený. Správu si môžeš skopírovať a poslať priamo.</p>}
        </>}
        <button className="link-action reset-response" onClick={()=>{setCopied('idle');setResponse(null);}}>Späť na otázku</button>
      </motion.div>}
    </div>
  </section>;
}
