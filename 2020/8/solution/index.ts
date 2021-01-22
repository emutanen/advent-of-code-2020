import { FileReader } from './FileReader';
import { HandheldCommand, dataMapMethod } from './HandheldHaltingDataMapping';
import { Engine } from './Engine';

const handheldDataFileReader = new FileReader<HandheldCommand>('../input/handheldHaltingInput.txt', dataMapMethod);
handheldDataFileReader.read();

// Part 1
const engine = new Engine(handheldDataFileReader.items, 0);
engine.run(false);

// Part 2 
// runs the engine until we find the right solution
let finalAccVal = -1; // initial value
while(finalAccVal < 0) { // returns -1 for infinite loop
  finalAccVal = engine.run(true);
}

console.log(`Final accumulator value when program terminates correctly is ${finalAccVal}!`);