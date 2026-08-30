import type { StageRequest, StageResult } from '../types';
export interface StageProvider{readonly name:string;stage(image:File,request:StageRequest,prompt:string):Promise<StageResult>}
