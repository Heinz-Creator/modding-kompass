const translated = import.meta.glob('../content/de/**/*.md', {query:'?raw',import:'default',eager:true});
import manifest from '../content/manifest.json';

export const chapterTitles = ['Einstieg','KI-Agent einrichten','Zwei Spiele verbinden','Engines in Rust','Gute Prompts schreiben','Testen & Fehler lösen','Regeln & Veröffentlichung','Häufige Fragen','Mod-Loader & Erweiterungen','Praxis: Zwei Spiele verbinden','Dein Projekt vorstellen','Modelle & Kosten','Praxis: Eine Engine in Rust','Reverse Engineering & Recht','Den passenden Weg wählen','Projekte im Vergleich','Synchronisation & Darstellung','Spielsysteme verstehen'];
const descriptions = ['Finde deinen Weg und verstehe den Ablauf.','Wähle deinen Agenten und bereite die Werkzeuge vor.','Verbinde zwei laufende Spiele miteinander.','Entwickle eine Engine, die deine Spieldaten liest.','Formuliere klare Aufträge und halte dein Projekt auf Kurs.','Finde die Ursache von Fehlern mit nachvollziehbaren Tests.','Bereite deine Mod verantwortungsvoll auf die Veröffentlichung vor.','Antworten auf die häufigsten Fragen zum Einstieg.','Prüfe, welche Werkzeuge zu deinem Spiel passen.','Verfolge ein Beispiel von der ersten Idee bis zum Test.','Erstelle eine verständliche Projektseite für andere.','Verstehe Kontingente, Modellwahl und Kosten.','Was ein experimenteller Engine-Nachbau tatsächlich leistet.','Orientierung zu Codeanalyse und rechtlichen Grenzen.','Vergleiche sieben unterschiedliche Arten von Modding-Projekten.','Lerne aus Ergebnissen und Problemen bestehender Projekte.','Verstehe Positionen, Zeitabläufe und die Bilddarstellung.','Eine Übersicht der Systeme einer Spiel-Engine.'];
const templateTitles={'AGENTS-starter.md':'Projektregeln für deine KI','STATUS-handoff.md':'Übergabe an einen neuen Chat','MODLOG-template.md':'Änderungen dokumentieren','BRIDGE-CONTRACT.md':'Verbindung zwischen Spielen planen','PLAYTEST-report.md':'Spieltest protokollieren','ATTRIBUTION-and-lineage.md':'Quellen & Urheber nennen','workflow-writeup.md':'Deinen Arbeitsablauf beschreiben'};
const companionTitles={'README.md':'Einführung des Originalprojekts','AGENTS.md':'Anweisungen für KI-Agenten','CONTRIBUTING.md':'Zum Originalprojekt beitragen','LEGAL.md':'Rechtliche Hinweise des Originals'};
export const documents = manifest.files.map(meta=>{
 const path=meta.path, file=path.split('/').pop(), isChapter=path.startsWith('guides/'), number=isChapter?Number(file.slice(0,2)):null;
 const text=translated[`../content/de/${path}`];
 return { ...meta, id:path.replace(/\.md$/,''),path,kind:isChapter?'chapter':path.startsWith('templates/')?'template':'companion',number,title:isChapter?chapterTitles[number]:(templateTitles[file]||companionTitles[file]),description:isChapter?descriptions[number]:'Eine übersetzte Vorlage aus dem Originalprojekt.',text,minutes:Math.max(2,Math.ceil(meta.sourceWords/180)),source:`${manifest.upstream}/blob/${manifest.commit}/${path}`};
});
export const chapters=documents.filter(d=>d.kind==='chapter').sort((a,b)=>a.number-b.number);
export const templates=documents.filter(d=>d.kind==='template');
export const companions=documents.filter(d=>d.kind==='companion');
export { manifest };

export function sectionsOf(text){
 const lines=text.split('\n'), sections=[];let current={title:'Überblick',body:''},fence=null;
 for(const line of lines){
  const f=line.match(/^\s*(`{3,}|~{3,})/);
  if(f){if(!fence)fence=f[1];else if(f[1][0]===fence[0]&&f[1].length>=fence.length)fence=null;}
  if(!fence&&/^# /.test(line))continue;
  if(!fence&&/^## /.test(line)){if(current.body.trim())sections.push(current);current={title:line.slice(3),body:line+'\n'};}
  else current.body+=line+'\n';
 }
 if(current.body.trim())sections.push(current);return sections;
}
export function resolveLink(href,doc){
 if(!href||href.startsWith('#')||/^(https?:|mailto:)/.test(href))return href;
 const [file,anchor]=href.split('#');let path;
 if(file.startsWith('../'))path=file.slice(3);
 else if(file.startsWith('guides/')||file.startsWith('templates/')||!doc.path.includes('/'))path=file;
 else path=doc.path.slice(0,doc.path.lastIndexOf('/')+1)+file;
 const found=documents.find(d=>d.path===path);
 return found?`#/${found.id}${anchor?'?anchor='+encodeURIComponent(anchor):''}`:`https://github.com/trevaintdead/ai-game-modding-guides/blob/${manifest.commit}/${path}${anchor?'#'+anchor:''}`;
}
export function slug(text){return text.toLowerCase().replace(/<[^>]+>/g,'').replace(/[^\p{L}\p{N}\s_-]/gu,'').replace(/\s/g,'-');}
