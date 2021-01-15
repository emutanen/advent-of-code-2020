import { FileReader } from './FileReader';
import { HaversackRule } from './HaversackRule';
import { dataMapMethod } from './HaversackDataMapping';
import { Counter } from './Counter';

console.log('Handy haversacks starting...');

// Part 1
const haversackFileReader = new FileReader<HaversackRule>('../input/handyHaversacksInput.txt', dataMapMethod);
haversackFileReader.read();

const targetColor = 'shiny gold';
const counter = new Counter(haversackFileReader.items, targetColor);
const part1ans = counter.count();
console.log(`Part 1: Handy haversacks have a total count of ${part1ans} possible colors that can contain a ${targetColor} bag!`);
console.log('...done!');