import { PassportData } from './PassportMapping';

export const validatePassport = (passport: PassportData): Boolean => {
  // First validate fields
  if((!passport['byr']) 
  || (!passport['iyr'])
  || (!passport['eyr'])
  || (!passport['hgt'])
  || (!passport['hcl'])
  || (!passport['ecl']) 
  || (!passport['pid'])
  ) {
    return false;
  }
  // Second, validate data
  if(!validateNumField(passport.byr, 4, 1920, 2002)) return false;
  if(!validateNumField(passport.iyr, 4, 2010, 2020)) return false;
  if(!validateNumField(passport.eyr, 4, 2020, 2030)) return false;
  if(!validateHeight(passport.hgt)) return false;
  if(!validateHcl(passport.hcl)) return false;
  if(!validateEcl(passport.ecl)) return false;
  if(!validatePid(passport.pid)) return false;
  return true;
}

const validateNumField = (
  entry: number,
  digits: number,
  min: number,
  max: number
  ): Boolean => {
  if(entry.toString().length !== digits) return false;
  if(entry < min || entry > max) return false;
  return true;
}
 
const validateHeight = (hgt: string): Boolean => {
  let hgtTerm = (hgt.substring(hgt.length-2, hgt.length));
  const quantity: number = parseInt(hgt.substring(0, hgt.length-2));
  if(hgtTerm === "cm" && validateNumField(quantity, 3, 150, 193)) return true;
  if(hgtTerm === "in" && validateNumField(quantity, 2, 59, 76)) return true;
  return false;
} 

const validateHcl = (hcl: string): Boolean => {
  const validHairColor = new RegExp('^\#[0-9a-f]{6}$');
  return validHairColor.test(hcl);
}

const validateEcl = (ecl: string): Boolean => {
  const eclRegexList = [/amb/, /blu/, /brn/, /gry/, /grn/, /hzl/, /oth/];
  return eclRegexList.some(rx => rx.test(ecl)); 
}

const validatePid = (pid: string): Boolean => {
  const validPidRx = new RegExp('^[0-9]{9}$');
  return validPidRx.test(pid);
}