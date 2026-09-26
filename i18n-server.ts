import {cookies} from 'next/headers';
import type {Lang} from './i18n';

export async function getLanguage():Promise<Lang>{
  const value=(await cookies()).get('organic-oil-language')?.value;
  return value==='de'||value==='fr'||value==='it'||value==='nl'?value:'en';
}
