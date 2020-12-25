export interface PassportData {
  byr?: number; // birth year
  iyr?: number; // issue year
  eyr?: number; // expiration year
  hgt?: string; // height
  hcl?: string; // hair color
  ecl?: string; // eye color
  pid?: string; // passport id
  cid?: string; // country id
}

export const dataMapMethod = (passportData: string): PassportData => {
  const passport: PassportData = {};

  passportData
  .split('\n')
  .map(line => { // line is always non-empty
      // We can use ES2019 Object.fromEntries() after converting to key-value pairs
      const passportLineObj = Object.fromEntries(line.split(' ').map(keyCode => keyCode.split(':')));
      Object.assign(passport, passportLineObj);
     });
  return passport;
}
