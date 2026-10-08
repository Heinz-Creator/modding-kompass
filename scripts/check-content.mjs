import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
const manifest=JSON.parse(fs.readFileSync('content/manifest.json','utf8'));
assert.equal(manifest.files.length,29);
assert.equal(manifest.files.filter(f=>f.path.startsWith('guides/')).length,18);
assert.equal(manifest.files.filter(f=>f.path.startsWith('templates/')).length,7);
const known=new Set(manifest.files.map(f=>f.path));let links=0,blocks=0;
function walk(node,visit){visit(node);for(const child of node.children||[])walk(child,visit);}
for(const file of manifest.files){
 const source=fs.readFileSync(`content/en/${file.path}`,'utf8'),text=fs.readFileSync(`content/de/${file.path}`,'utf8');
 assert(text.trim().length>300,`Empty document: ${file.path}`);
 assert(!/__PROTECTED_|__LITERAL_|__GESCHÜTZT_/.test(text),`Unrestored placeholder: ${file.path}`);
 const ast=unified().use(remarkParse).use(remarkGfm).parse(text);
 walk(ast,node=>{
  if(node.type==='code'){blocks++;assert(!node.value.includes('\n```\n')||node.lang==='markdown',`Broken code fence: ${file.path}`);}
  if(node.type==='link'&&!/^(?:https?:|mailto:|#)/.test(node.url)){
   const dest=node.url.split('#')[0];if(!dest.endsWith('.md'))return;
   links++;const resolved=path.posix.normalize(path.posix.join(path.posix.dirname(file.path),dest));
   assert(known.has(resolved),`Broken internal link: ${file.path} -> ${node.url}`);
  }
 });
 // Executable examples remain literal; translated Markdown templates are intentionally different.
 const executable=/^```(bash|sh|shell|json|cpp|rust|python|csharp)\n[\s\S]*?^```/gm;
 for(const block of source.match(executable)||[])assert(text.includes(block),`Executable example changed: ${file.path}`);
}
assert(fs.readFileSync('LICENSE','utf8').includes('Copyright (c) 2026 Trev and contributors'));
console.log(`Content verified: 29 documents, 18 chapters, 7 templates, ${links} internal links, ${blocks} example blocks, MIT attribution.`);
