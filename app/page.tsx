'use client';
import {ChangeEvent,useMemo,useState} from 'react';

const styles=['Moderno','Minimal','Mediterraneo','Scandinavo','Luxury','Industrial','Japandi','Rustico Chic'];
const allLocks=['Muri e geometria','Pavimenti','Porte e finestre','Infissi / impianti fissi','Cucina fissa','Sanitari'];

type StageResult={provider:string;geometryScore:number;publishable:boolean;steps:string[]};

export default function Home(){
 const [image,setImage]=useState('');
 const [room,setRoom]=useState('auto');
 const [style,setStyle]=useState(styles[0]);
 const [mode,setMode]=useState<'restyle'|'empty-stage'>('restyle');
 const [locks,setLocks]=useState<string[]>(allLocks);
 const [busy,setBusy]=useState(false);
 const [result,setResult]=useState<StageResult|null>(null);
 const [error,setError]=useState('');
 const canGenerate=useMemo(()=>Boolean(image)&&locks.length>0&&!busy,[image,locks,busy]);
 function upload(e:ChangeEvent<HTMLInputElement>){const f=e.target.files?.[0];if(f){if(image)URL.revokeObjectURL(image);setImage(URL.createObjectURL(f));setResult(null);setError('')}}
 function toggleLock(x:string){setLocks(v=>v.includes(x)?v.filter(i=>i!==x):[...v,x])}
 async function generate(){setBusy(true);setResult(null);setError('');try{const r=await fetch('/api/stage',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({room,style,mode,locks})});const data=await r.json();if(!r.ok)throw new Error(data.error||'Errore staging');setResult(data)}catch(e){setError(e instanceof Error?e.message:'Errore sconosciuto')}finally{setBusy(false)}}
 return <main><aside><h2>EstateStage <b>AI</b></h2><nav>Studio<br/>Progetti<br/>Benchmark<br/>Provider</nav><footer>Architecture-first MVP</footer></aside><section className="workspace"><header><small>VIRTUAL STAGING WORKSPACE</small><h1>Trasforma una stanza senza alterare l’immobile.</h1><p>Pipeline controllata: input → architecture lock → provider → quality gate.</p></header><div className="grid"><article className="card"><h3>01 · Fotografia</h3><label className="upload"><input type="file" accept="image/jpeg,image/png,image/webp" onChange={upload}/>{image?<img src={image} alt="Foto immobile caricata"/>:<span>＋<br/><b>Carica fotografia</b><br/><small>JPG, PNG o WEBP</small></span>}</label><h3>02 · Configurazione</h3><select value={room} onChange={e=>setRoom(e.target.value)}><option value="auto">Riconoscimento automatico</option><option value="living">Soggiorno</option><option value="bedroom">Camera</option><option value="kitchen">Cucina</option><option value="bathroom">Bagno</option></select><select value={mode} onChange={e=>setMode(e.target.value as 'restyle'|'empty-stage')}><option value="restyle">Restyling arredi</option><option value="empty-stage">Staging stanza vuota</option></select><div className="styles">{styles.map(x=><button type="button" className={x===style?'selected':''} onClick={()=>setStyle(x)} key={x}>{x}</button>)}</div></article><article className="card preview"><h3>Prima / Dopo</h3><div className="stage">{image?<img src={image} alt="Anteprima stanza"/>:<span>Carica una fotografia per iniziare</span>}{result&&<div className="demo">STAGING DEMO · {style}</div>}</div><div className="metrics"><span>Geometria <b>{result?`${Math.round(result.geometryScore*100)}%`:'—'}</b></span><span>Provider <b>{result?.provider||'—'}</b></span><span>Pubblicabile <b>{result?.publishable?'Sì':'No'}</b></span></div>{result&&<p className="ok">Pipeline: {result.steps.join(' → ')}</p>}</article><article className="card"><h3>03 · Architecture Lock</h3>{allLocks.map(x=><label className="lock" key={x}>{x}<input type="checkbox" checked={locks.includes(x)} onChange={()=>toggleLock(x)}/></label>)}<div className="policy"><b>Policy immobiliare</b><p>Modificare solo arredi ed elementi decorativi. Vietate modifiche strutturali, volumetriche o permanenti.</p></div><button className="go" disabled={!canGenerate} onClick={generate}>{busy?'Orchestrazione…':'Genera staging'}</button>{error&&<p className="error">{error}</p>}{result&&!result.publishable&&<p className="ok">Demo validata. Il provider reale verrà abilitato solo dopo quality gate e chiavi server-side.</p>}</article></div></section></main>
}
