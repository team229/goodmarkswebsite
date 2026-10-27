import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
const script = readFileSync('public/chatgpt-measurement.js', 'utf8');
function fixture(saved) {
  const handlers = {}, buttons = {}, calls = [], scripts = [];
  const panel = { hidden: true, querySelectorAll: () => ['yes','no'].map(value => ({getAttribute: () => value, addEventListener: (_, cb) => buttons[value] = cb})) };
  const document = {readyState: 'complete', head: {appendChild: x => scripts.push(x)}, createElement: () => ({}), getElementById: id => id.endsWith('choice') ? panel : {addEventListener: (_, cb) => handlers.settings = cb}, addEventListener: (name, cb) => handlers[name] = cb};
  const storage = new Map(saved ? [['gmc-chatgpt-measurement-v1',saved]] : []);
  const window = {};
  const ctx = {window, document, localStorage: {getItem:k=>storage.get(k),setItem:(k,v)=>storage.set(k,v)}, URL, Element: class Element { closest(){return this;} }, Set};
  vm.runInNewContext(script, ctx);
  return {ctx, window, panel, buttons, scripts, handlers, events: () => window.oaiq?.q?.filter(c=>c[0]==='measure') || calls};
}
const f=fixture();
assert.equal(f.scripts.length,0);assert.equal(f.panel.hidden,false);
f.window.gmcChatGPT.lead('before-consent');assert.equal(f.events().length,0);
f.buttons.yes();assert.equal(f.scripts.length,1);assert.equal(f.events()[0][1],'page_viewed');
f.window.gmcChatGPT.lead('a');f.window.gmcChatGPT.lead('a');assert.equal(f.events().filter(x=>x[1]==='lead_created').length,1);
const a=new f.ctx.Element();a.href='https://wa.me/918800880028';f.handlers.click({target:a});assert.equal(f.events().at(-1)[3].custom_event_name,'whatsapp_click');
a.href='tel:8800880028';f.handlers.click({target:a});assert.equal(f.events().at(-1)[3].custom_event_name,'phone_click');
f.buttons.no();const n=f.events().length;f.window.gmcChatGPT.lead('b');f.handlers.click({target:a});assert.equal(f.events().length,n);
assert.equal(f.window.oaiq.q.at(-1)[0],'consent');assert.equal(f.window.oaiq.q.at(-1)[1],false);
assert.equal(fixture('no').scripts.length,0);assert.equal(fixture('yes').events().length,1);
// Exercise the real shared form hook with controlled transport and React state.
let source=readFileSync('src/hooks/useFormSubmit.ts','utf8').replace(/import[\s\S]*?from\s+["'][^"']+["'];/g,'').replace('export function','function');
const js=ts.transpile(source,{target:ts.ScriptTarget.ES2022});
async function hookCase(ok,formName='Contact Page',reject=false,valid=true) {
 let leads=0;
 const ctx={useRef: v=>({current:v}),useState:v=>[v,()=>{}],validateSubmission:()=>({ok:valid,error:'invalid'}),stripInternalFields:x=>x,trackChatGPTLead:()=>leads++,window:{location:{href:'https://example.test/'}},fetch:async()=>{if(reject)throw Error('network');return {ok};}};
 vm.runInNewContext(js+';globalThis.testHook=useFormSubmit;',ctx);
 const result=await ctx.testHook(formName).submitForm({});return {result,leads};
}
assert.deepEqual(await hookCase(true),{result:true,leads:1});
assert.deepEqual(await hookCase(false),{result:false,leads:0});
assert.deepEqual(await hookCase(true,'JoinFaculty'),{result:true,leads:0});
assert.deepEqual(await hookCase(false,'Contact Page',true),{result:false,leads:0});
assert.deepEqual(await hookCase(true,'Contact Page',false,false),{result:false,leads:0});
console.log('PASS: consent, withdrawal, lead deduplication, contact-click separation, success/failure/network/spam/faculty form cases');
