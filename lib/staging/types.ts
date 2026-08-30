export type RoomType='auto'|'living'|'bedroom'|'kitchen'|'bathroom'|'office'|'dining'|'outdoor';
export type StageMode='restyle'|'declutter-stage';
export type StageStyle='modern'|'minimal'|'mediterranean'|'scandinavian'|'luxury'|'industrial'|'japandi'|'rustic-chic';
export type ArchitectureLocks={walls:boolean;floor:boolean;windowsDoors:boolean;fixtures:boolean;kitchen:boolean;sanitary:boolean};
export type StageRequest={roomType:RoomType;mode:StageMode;style:StageStyle;locks:ArchitectureLocks;variants:number};
export type QualityScore={architectureRetention:number|null;photorealism:number|null;styleAdherence:number|null;publishReady:boolean;needsHumanReview:boolean};
export type StageVariant={id:string;imageUrl:string;label:string};
export type StageResult={jobId:string;provider:string;status:'completed'|'failed';variants:StageVariant[];message:string;quality:QualityScore;pipeline:string[];prompt:string;elapsedMs:number;estimatedCostUsd?:number};
