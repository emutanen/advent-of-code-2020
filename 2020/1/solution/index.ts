import { FileReader } from './FileReader';
import { findSum } from './findSum';

const fileReader = new FileReader('../input/input.txt');
fileReader.read();

findSum(fileReader.data, 2020);
