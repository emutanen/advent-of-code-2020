import { FileReader } from './FileReader';
import { findSum, findThreeSum } from './findSum';

const fileReader = new FileReader('../input/input.txt');
fileReader.read();

findThreeSum(fileReader.data, 2020);
