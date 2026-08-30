import {NextResponse} from 'next/server';import {providerStatus} from '../../../lib/staging/orchestrator';
export const dynamic='force-dynamic';
export function GET(){return NextResponse.json(providerStatus())}
