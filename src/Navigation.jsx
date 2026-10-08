import React from 'react';
import {Compass,Search,BookOpen,FileText,Info,X,Check} from 'lucide-react';
import {chapters} from './content';
export default function Navigation({route,query,setQuery,completed,open,close}){
 const done=chapters.filter(c=>completed.includes(c.id)).length;
 return <><button className={`drawer-backdrop ${open?'visible':''}`} aria-label="Navigation schließen" onClick={close}/><aside className={`sidebar ${open?'open':''}`} aria-label="Hauptnavigation">
  <a className="brand" href="#/start" onClick={close}><Compass size={32} strokeWidth={1.7}/><span>Modding Kompass</span></a>
  <button className="drawer-close" onClick={close} aria-label="Navigation schließen"><X size={22}/></button>
  <div className="search-field"><Search size={18}/><input aria-label="Kapitel durchsuchen" placeholder="Kapitel durchsuchen" value={query} onChange={e=>{setQuery(e.target.value);if(e.target.value.trim())location.hash='/suche';}}/><kbd>⌘ K</kbd></div>
  <nav className="chapter-nav"><p className="nav-label">DEIN LERNPFAD</p>{chapters.slice(0,6).map(c=><a key={c.id} className={`chapter-link ${(route===c.id||(route==='start'&&c.number===0))?'active':''}`} href={`#/${c.id}`} onClick={close}><span className="chapter-number">{completed.includes(c.id)?<Check size={17}/>:String(c.number).padStart(2,'0')}</span>{c.title}</a>)}</nav>
  <nav className="secondary-nav"><a className={route==='kapitel'?'active':''} href="#/kapitel" onClick={close}><BookOpen size={20}/>Alle Kapitel</a><a className={route==='vorlagen'?'active':''} href="#/vorlagen" onClick={close}><FileText size={20}/>Vorlagen</a><a className={route==='ueber'?'active':''} href="#/ueber" onClick={close}><Info size={20}/>Über diese Ausgabe</a></nav>
  <div className="sidebar-progress"><div><span>Dein Lesefortschritt</span><span>{Math.round(done/chapters.length*100)} %</span></div><progress max={chapters.length} value={done} aria-label="Abgeschlossene Kapitel"/><small>{done} von {chapters.length} Kapiteln abgeschlossen</small></div>
 </aside></>;
}
