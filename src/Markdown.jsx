import React,{useState,useContext,createContext} from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Copy,Check} from 'lucide-react';
import {resolveLink,slug} from './content';
import {useStored} from './state';
const TaskContext=createContext('');
function nodeText(node){return node.value||node.children?.map(nodeText).join('')||'';}
function TaskCheckbox({checked,...props}){
 const label=useContext(TaskContext),[value,setValue]=useStored('modding-kompass.task.'+label,checked||false);
 return <input type="checkbox" checked={value} onChange={e=>setValue(e.target.checked)} aria-label={label.split('::').slice(1).join('::').trim()||'Checklistenpunkt'}/>;
}

function textOf(node){if(typeof node==='string')return node;if(Array.isArray(node))return node.map(textOf).join('');return node?.props?textOf(node.props.children):'';}
export function CopyButton({text,label='Kopieren',className=''}){
 const [copied,setCopied]=useState(false),[error,setError]=useState(false);
 async function copy(){try{await navigator.clipboard.writeText(text);setCopied(true);setError(false);setTimeout(()=>setCopied(false),2200);}catch{setError(true);}}
 return <span className={className}><button className="copy-button" onClick={copy}>{copied?<Check size={15}/>:<Copy size={15}/>} {copied?'Kopiert':label}</button>{error&&<small role="status">Bitte den Text auswählen und manuell kopieren.</small>}</span>;
}
function CodeBlock({children}){return <div className="code-block"><CopyButton text={textOf(children)} className="code-copy"/><pre>{children}</pre></div>;}
export default function Markdown({text,doc}){
 const heading=(Tag)=>({children})=>{
  const title=textOf(children),idx=doc.headingsDe?.indexOf(title),original=idx>=0?doc.headingsEn[idx]:title;
  return <Tag id={slug(original)}>{children}</Tag>;
 };
 return <div className="prose"><ReactMarkdown remarkPlugins={[remarkGfm]} components={{
  h1:heading('h2'),h2:heading('h2'),h3:heading('h3'),h4:heading('h4'),
  a:({href,children})=>{const url=resolveLink(href,doc);return <a href={url} {...(url?.startsWith('http')?{target:'_blank',rel:'noopener noreferrer'}:{})}>{children}</a>;},
  pre:CodeBlock,
  table:({children})=><div className="table-scroll"><table>{children}</table></div>,
  li:({node,className,children})=>className?.includes('task-list-item')?<TaskContext.Provider value={doc.id+'::'+nodeText(node)}><li className={className}><label className="task-item-label">{children}</label></li></TaskContext.Provider>:<li>{children}</li>,
  input:TaskCheckbox
 }}>{text.replace(/<sub>[\s\S]*?<\/sub>/g,'').replace(/^# .+\n/,'')}</ReactMarkdown></div>;
}
