import React,{useMemo} from 'react';
import {ChevronRight,Check,FileText,Search} from 'lucide-react';
import {chapters,templates,documents} from './content';
export default function Library({kind,query,setQuery,completed}){
 const searching=kind==='suche',templating=kind==='vorlagen';
 const list=searching?documents:templating?templates:chapters;
 const results=useMemo(()=>{const term=query.trim().toLocaleLowerCase('de');return searching&&term?list.filter(d=>(d.title+' '+d.text).toLocaleLowerCase('de').includes(term)):list;},[list,query,searching]);
 return <><h1>{searching?'Die passende Antwort finden':templating?'Vorlagen für dein Projekt':'Alle Kapitel auf einen Blick'}</h1><p className="page-intro">{searching?'Durchsuche alle Kapitel, Vorlagen und Begleittexte.':templating?'Kopiere eine Vorlage, passe sie an und nutze sie direkt mit deinem KI-Agenten.':'Gehe den Lernpfad der Reihe nach durch oder springe direkt zu deinem Thema.'}</p>
 {searching&&<label className="library-search"><Search size={20}/><input autoFocus aria-label="Alle Texte durchsuchen" placeholder="Zum Beispiel: Minecraft, Kosten oder Rust" value={query} onChange={e=>setQuery(e.target.value)}/></label>}
 <p className="results-label" role="status">{results.length} {searching?'Treffer':templating?'Vorlagen':'Kapitel'}</p>
 <div className="document-list">{results.map(d=><a key={d.id} href={`#/${d.id}`} className="document-row"><span className={`document-number ${completed.includes(d.id)?'done':''}`}>{completed.includes(d.id)?<Check size={21}/>:d.number!==null?String(d.number).padStart(2,'0'):<FileText size={21}/>}</span><div><h2>{d.title}</h2><p>{searching&&query.trim()?excerpt(d.text,query):d.description}</p><small>{d.kind==='chapter'?`${d.minutes} Min. Lesezeit`:d.kind==='template'?'Vorlage':'Begleittext'}</small></div><ChevronRight size={21}/></a>)}</div>
 {results.length===0&&<div className="empty-state"><Search size={28}/><h2>Keine passenden Texte gefunden</h2><p>Versuche einen kürzeren Begriff oder eine andere Schreibweise.</p><button className="button quiet" onClick={()=>setQuery('')}>Suche zurücksetzen</button></div>}
 </>;
}
function excerpt(text,query){const clean=text.replace(/\[([^\]]+)\]\([^)]+\)/g,'$1').replace(/<[^>]+>/g,'').replace(/[#*`|]/g,'').replace(/\s+/g,' '),index=clean.toLocaleLowerCase('de').indexOf(query.trim().toLocaleLowerCase('de'));return (index>50?'… ':'')+clean.slice(Math.max(0,index-50),Math.max(0,index-50)+170)+'…';}
