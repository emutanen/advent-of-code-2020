import { HaversackRule } from './HaversackRule';

export interface HaversacksData {
  entries: HaversackRule[];  
}

const arrayFromHaversacksRule = (haversacksRule: string): string[] => haversacksRule.slice(0, -1).split(','); 

export const dataMapMethod = (haversackData: string): HaversackRule => {
  const dat = haversackData.split(' bags contain ');
  const color = dat[0];
  const mapData = new Map<string, number>();

  if(dat[0] === '') return;
  if(dat[1].startsWith('no other bags')) {
    return new HaversackRule(color, mapData, true);
  }

  for(let rule of arrayFromHaversacksRule(dat[1])){
    const num = parseInt(rule.trim().charAt(0));
    const key = rule.replace('bags', '').replace('bag', '').trim().substring(2);
    mapData.set(key, num);
  }
  return new HaversackRule(color, mapData, false);
}