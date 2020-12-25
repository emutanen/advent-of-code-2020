import { FileReader } from './FileReader';
import { PassportData, dataMapMethod } from './PassportMapping';
import { Validator } from './Validator';
import { validatePassport } from './validatePassport';

const passportFileReader = new FileReader<PassportData>(
  '../input/passportProcessingInput.txt',
  dataMapMethod
  );

passportFileReader.read();

const validator = new Validator<PassportData>(passportFileReader.items, validatePassport);
validator.validate();

console.log(`Valid number of passports in Solution 4-1 is ${validator.validItemsAmount}`);
