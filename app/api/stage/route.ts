import {NextResponse} from 'next/server';import {orchestrate} from '../../../lib/orchestrator';
export async function POST(req:Request){try{const input=await req.json();return NextResponse.json(await orchestrate(input))}catch(e:any){return NextResponse.json({error:e.message},{status:400})}}
