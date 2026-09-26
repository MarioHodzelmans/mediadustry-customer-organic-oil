export type IconName='grower'|'harvest'|'distill'|'process'|'release'|'shipment'|'spec'|'analysis'|'safety'|'certificate'|'trace'|'declaration'|'flavours'|'confectionery'|'pharma'|'oral'|'distributors';
const paths:Record<IconName,React.ReactNode>={
  grower:<><path d="M12 21v-9M12 13C6 13 4 9 4 5c5 0 8 2 8 8Zm0 2c0-6 3-9 8-9 0 5-2 9-8 9Z"/></>,
  harvest:<><path d="M5 19h14M8 19V9m8 10V9M8 9c-3-1-4-3-4-6 3 0 5 2 5 5m7 1c3-1 4-3 4-6-3 0-5 2-5 5M8 13l8-4"/></>,
  distill:<><path d="M8 3h8M10 3v6l-5 8a3 3 0 0 0 2.5 4h9a3 3 0 0 0 2.5-4l-5-8V3M8 15h8M12 11v2"/></>,
  process:<><path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></>,
  release:<><path d="M12 2 4 5v6c0 5 3 8 8 11 5-3 8-6 8-11V5l-8-3Z"/><path d="m8 12 3 3 5-6"/></>,
  shipment:<><path d="M3 7 12 3l9 4v10l-9 4-9-4V7Z"/><path d="m3 7 9 4 9-4M12 11v10M8 5l9 4"/></>,
  spec:<><path d="M6 2h9l4 4v16H6V2Z"/><path d="M15 2v5h4M9 11h7M9 15h7M9 19h5"/></>,
  analysis:<><path d="M3 20h18M5 17l4-5 3 2 5-8 2 2"/><circle cx="9" cy="12" r="1"/><circle cx="17" cy="6" r="1"/></>,
  safety:<><path d="M12 2 3 6v6c0 5 4 8 9 10 5-2 9-5 9-10V6l-9-4Z"/><path d="M12 7v7m0 3v.5"/></>,
  certificate:<><path d="M5 3h14v14H5V3ZM8 7h8M8 11h8M9 17v5l3-2 3 2v-5"/></>,
  trace:<><path d="M3 5h8v6H3V5Zm10 8h8v6h-8v-6ZM11 8h4a3 3 0 0 1 3 3v2M6 11v3a3 3 0 0 0 3 3h4"/></>,
  declaration:<><path d="M5 2h10l4 4v16H5V2ZM15 2v5h4M8 12h8M8 16h5m2 0 1 1 2-3"/></>,
  flavours:<><path d="M12 21v-8M12 13c-5-1-7-4-7-8 5 0 7 3 7 8Zm0 1c0-5 2-8 7-9 0 5-2 8-7 9Z"/><path d="M8 20h8"/></>,
  confectionery:<><path d="m7 8-4-2v12l4-2m10-8 4-2v12l-4-2M7 8h10v8H7V8Z"/><path d="m9 10 6 4m0-4-6 4"/></>,
  pharma:<><path d="M8 3h8v3H8V3ZM9 6v3c-2 1-4 3-4 6v6h14v-6c0-3-2-5-4-6V6M12 12v6m-3-3h6"/></>,
  oral:<><path d="M7 3c-3 0-5 3-5 7 0 5 3 11 5 11 1 0 2-3 3-5 .5-1 1.5-1 2 0 1 2 2 5 3 5 2 0 5-6 5-11 0-4-2-7-5-7-2 0-3 1-4 1s-2-1-4-1Z"/></>,
  distributors:<><path d="M3 7 12 3l9 4v10l-9 4-9-4V7Z"/><path d="m3 7 9 4 9-4M12 11v10M8 5l9 4"/></>,
};
export default function Icon({name}:{name:IconName}){return <svg className="section-icon" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>}
