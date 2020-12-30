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

console.log(`The largest ID value for the current selection of boarding passes is ${maxId}`);