import { PassportData } from './PassportMapping';

/* Validates single passport */
export const validatePassport = (passport: PassportData): Boolean => {
  if((!passport['byr']) 
  || (!passport['iyr'])
  || (!passport['eyr'])
  || (!passport['hgt'])
  || (!passport['hcl'])
  || (!passport['ecl'])
  || (!passport['pid'])
  ) {
    return false;
  } else {
    return true;
  }
}