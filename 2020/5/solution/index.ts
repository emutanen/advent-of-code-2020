import { FileReader } from './FileReader';
import { BoardingPassDataRow, dataMapMethod } from './BoardingPassMapping';
import { BoardingPass } from './BoardingPass';

const boardingPassFileReader = new FileReader<BoardingPassDataRow>(
  '../input/binaryBoardingInput.txt',
  dataMapMethod
  );

const boardingPasses: BoardingPass[] = [];

boardingPassFileReader.read();

// Create array of rows and cols to pass to boarding pass
const numberOfRows = 128; 
const cols = [1, 2, 3, 4, 5, 6, 7, 8];
const rows = Array(numberOfRows);
let i = 0;
while(i < numberOfRows) rows[i++] = i;

for (const code of boardingPassFileReader.rows) {
  const boardingPass = new BoardingPass(code.cols, rows, cols);
  boardingPasses.push(boardingPass);
  // console.log(`Boarding pass was created! Seat row is ${boardingPass.seatRow} and seat column is ${boardingPass.seatColumn}!`);
}

// Handle boarding pass sorting and ids data
const maxId = boardingPasses.map(pass => {
  return pass.id;
}).sort((a,b) => {
  return b - a // sort by descending order
})[0];

console.groupCollapsed('Solution 5-1');
console.log(`The largest ID value for the current selection of boarding passes is ${maxId}`);
console.groupEnd();

// Part 2
// Let's find missing id whose adjacent ids exist
// Because missing id is not present in the array, we only find the prev and next ids with the condition
console.groupCollapsed('Solution 5-2');
const sortedIdsAsc = boardingPasses.map(pass => pass.id).sort((a,b) => a-b);
const suspiciousIds = [];
let prev = null;
let next = null;

for(let [i, id] of sortedIdsAsc.entries()) {
  if(i === 0) continue; 
  if(i === sortedIdsAsc.length - 2) break;
  prev = sortedIdsAsc[i-1];
  next = sortedIdsAsc[i+1];

  if(prev + 1 !== id || next - 1 !== id) {
    console.log(`Seat with id ${id} looks suspicious...`);
    suspiciousIds.push(id);
  }
}

// Correct result would be in between 2 suspicious ids (other adjacent id is missing for suspicious id)
if(suspiciousIds.length === 2) {
  console.log(`Missing boarding pass id is ${(suspiciousIds[0] + suspiciousIds[1]) / 2}`);
} else {
  console.log(`Not enough conditions to filter down to a single id!`);
}

console.groupEnd();