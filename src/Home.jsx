import React from 'react';
import {Box,Link2,Settings,Info,ChevronRight,ChevronLeft} from 'lucide-react';
import {chapters} from './content';
const stages=[{label:'Verstehen',target:chapters[0].id},{label:'Vorbereiten',target:chapters[1].id},{label:'Loslegen',target:chapters[14].id}];
const routes=[{icon:Box,title:'Neue Inhalte hinzufügen',description:'Eigene Karten, Charaktere, Gegenstände oder Spielmechaniken erstellen.',id:chapters[8].id},{icon:Link2,title:'Zwei Spiele verbinden',description:'Daten, Inhalte oder Mechaniken aus zwei Spielen kreativ kombinieren.',id:chapters[2].id},{icon:Settings,title:'Eine Engine nachbauen',description:'Die Funktionsweise einer Spiel-Engine verstehen und in Rust selbst umsetzen.',id:chapters[3].id}];
export default function Home(){return <>
 <h1 className="home-title">Deine erste Mod beginnt hier.</h1><p className="home-intro">Von der Idee zur spielbaren Mod. Lerne Schritt für Schritt, wie du mit KI-Agenten Spiele veränderst.</p>
 <div className="stages" aria-label="Drei Schritte zum Einstieg">{stages.map((s,i)=><a key={s.label} href={`#/${s.target}`} className={i===0?'current':''}><span>{String(i+1).padStart(2,'0')}</span>{s.label}</a>)}</div>
 <section className="route-picker"><h2>Was möchtest du verändern?</h2><p>Wähle einen Schwerpunkt. Du kannst später jederzeit zu einem anderen Thema wechseln.</p><div className="route-list">{routes.map(r=><a className="route-row" href={`#/${r.id}`} key={r.id}><r.icon size={30} strokeWidth={1.8}/><div><h3>{r.title}</h3><p>{r.description}</p></div><ChevronRight size={21}/></a>)}</div></section>
 <div className="learning-note"><Info size={20}/><span>Starte klein. Eine funktionierende Änderung ist besser als zehn halbfertige Ideen.</span></div>
 <nav className="page-navigation" aria-label="Lernpfad"><a className="button quiet" href={`#/${chapters[0].id}`}><ChevronLeft size={18}/>Einstieg lesen</a><a className="button primary" href={`#/${chapters[1].id}`}>Weiter: KI-Agent einrichten<ChevronRight size={18}/></a></nav>
 </>;}
