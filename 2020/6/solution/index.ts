import { FileReader } from './FileReader';
import { CustomsFormData, dataMapMethod } from './CustomsFormMapping';
import { countGroupAnswers } from './CountGroupAnswers';

const customsFormFileReader = new FileReader<CustomsFormData>('../input/customCustomsInput.txt', dataMapMethod);
customsFormFileReader.read();
const groupsData: CustomsFormData[] = customsFormFileReader.items;

// console.dir(customsFormFileReader.items, { depth: null });

// Part 1
const sumOfAllAnswers = countGroupAnswers(groupsData);
console.log(`All groups unique answers have a sum of ${sumOfAllAnswers} in total.`);
