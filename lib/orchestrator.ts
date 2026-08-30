export type StageRequest={room:string;style:string;mode:'restyle'|'empty-stage';locks:string[]};
export type StageResult={provider:string;geometryScore:number;publishable:boolean;steps:string[]};
export interface StageProvider{stage(input:StageRequest):Promise<StageResult>}
export class DemoProvider implements StageProvider{async stage(_:StageRequest){return{provider:'demo',geometryScore:1,publishable:false,steps:['input-validator','room-analysis','architecture-guardian','demo-provider','quality-inspector']}}}
export async function orchestrate(input:StageRequest,provider:StageProvider=new DemoProvider()){if(!input.style)throw new Error('style required');if(input.locks.length===0)throw new Error('architecture lock required');return provider.stage(input)}
