import { FileReader } from './FileReader';
import { HandheldCommand, dataMapMethod } from './HandheldHaltingDataMapping';
import { Engine } from './Engine';

const handheldDataFileReader = new FileReader<HandheldCommand>('../input/handheldHaltingInput.txt', dataMapMethod);
handheldDataFileReader.read();
console.dir(handheldDataFileReader.items, { depth: null });

const engine = new Engine(handheldDataFileReader.items, 0);
engine.run();