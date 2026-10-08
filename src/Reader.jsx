import React,{useState,useEffect,useMemo} from 'react';
import {ChevronLeft,ChevronRight,Check,BookOpen,List,Download,Clock} from 'lucide-react';
import {chapters,sectionsOf} from './content';
import Markdown,{CopyButton} from './Markdown';
import {useStored} from './state';

export default function Reader({doc,completed,toggleCompleted}){
 const sections=useMemo(()=>sectionsOf(doc.text),[doc]);
 const [positions,setPositions]=useStored('modding-kompass.positions',{});
 const [step,setStep]=useState(Math.min(positions[doc.id]||0,sections.length-1)),[full,setFull]=useState(false);
 useEffect(()=>{setStep(Math.min(positions[doc.id]||0,sections.length-1));setFull(false);},[doc.id]);
 useEffect(()=>{const anchor=new URLSearchParams(location.hash.split('?')[1]||'').get('anchor');if(anchor){setFull(true);setTimeout(()=>document.getElementById(anchor)?.scrollIntoView({block:'start'}),150);}},[doc.id,location.hash]);
 function move(next){setStep(next);setPositions({...positions,[doc.id]:next});window.scrollTo({top:0,behavior:'instant'});}
 function download(){const url=URL.createObjectURL(new Blob([doc.text],{type:'text/markdown;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download=doc.path.split('/').pop();a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
 const done=completed.includes(doc.id),next=chapters.find(c=>c.number===doc.number+1),previous=chapters.find(c=>c.number===doc.number-1);
 return <article className="reader">
  <div className="reader-title"><h1>{doc.title}</h1><p>{doc.description}</p><span className="reading-time"><Clock size={15}/>{doc.minutes} Min. Lesezeit · {sections.length} Abschnitte</span></div>
  <div className="reader-toolbar"><div className="view-toggle" aria-label="Lesemodus"><button className={!full?'selected':''} onClick={()=>setFull(false)}><List size={16}/>Schritt für Schritt</button><button className={full?'selected':''} onClick={()=>setFull(true)}><BookOpen size={16}/>Ganzes Kapitel</button></div><button className="icon-text" onClick={download}><Download size={16}/>Datei laden</button></div>
  {doc.kind==='template'&&<div className="template-copy"><CopyButton text={doc.text} label="Ganze Vorlage kopieren"/></div>}
  {!full&&<><div className="section-position"><span>Abschnitt {step+1} von {sections.length}</span><span>{sections[step].title}</span></div><progress className="section-progress" max={sections.length} value={step+1} aria-label="Position im Kapitel"/><label className="section-select">Direkt zu einem Abschnitt<select aria-label="Direkt zu einem Abschnitt" value={step} onChange={e=>move(Number(e.target.value))}>{sections.map((s,i)=><option key={i} value={i}>{i+1}. {s.title}</option>)}</select></label></>}
  <Markdown text={full?doc.text:sections[step].body} doc={doc}/>
  <nav className="page-navigation reader-navigation" aria-label="Abschnittsnavigation">
   {!full&&step>0?<button className="button quiet" onClick={()=>move(step-1)}><ChevronLeft size={18}/>Vorheriger Abschnitt</button>:<a className="button quiet" href={previous?`#/${previous.id}`:'#/start'}><ChevronLeft size={18}/>{previous?'Vorheriges Kapitel':'Zum Einstieg'}</a>}
   {!full&&step<sections.length-1?<button className="button primary" onClick={()=>move(step+1)}>Nächster Abschnitt<ChevronRight size={18}/></button>:doc.kind==='chapter'?<button className="button primary" onClick={()=>{if(!done)toggleCompleted(doc.id);location.hash=next?`/${next.id}`:'/kapitel';}}>{next?'Kapitel abschließen & weiter':'Kapitel abschließen'}<Check size={18}/></button>:<a className="button primary" href="#/vorlagen">Weitere Vorlagen<ChevronRight size={18}/></a>}
  </nav>
  {doc.kind==='chapter'&&<button className={`complete-button ${done?'completed':''}`} aria-pressed={done} onClick={()=>toggleCompleted(doc.id)}><Check size={18}/>{done?'Als gelesen gespeichert – rückgängig machen':'Kapitel als gelesen markieren'}</button>}
 </article>;
}
