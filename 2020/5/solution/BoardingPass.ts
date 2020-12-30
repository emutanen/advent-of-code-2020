import { binarySearch } from './BinarySearch';

const ZERO_BASED_INDEX_OFFSET = -1;
const NUMBER_OF_SEATS_ON_ROW = 8;
const SEAT_CODE_TOTAL_LEN = 10;

export class BoardingPass {
  private row: number;
  private column: number;
  constructor(public code: string[], public rows: number[], public cols: number[]) {

    // Create array of directions
    // Example: FBFBBFFRLR
    // B = +1
    // F = -1
    // const dirArray = [-1, 1, -1, 1, 1, -1, -1];

    // Handle row data
    let dirArray = [NUMBER_OF_SEATS_ON_ROW - 1];
    for (let i = 0; i < NUMBER_OF_SEATS_ON_ROW - 1; i++) {
      dirArray[i] = code[i] === 'F' ? -1 : 1;      
    }
    this.row = binarySearch(rows, dirArray, 0) + ZERO_BASED_INDEX_OFFSET; // Returns 1-based number, but the assignment is using 0-based row number

    // Handle column data
    let dirArrayCols = [3];
    for (let i = NUMBER_OF_SEATS_ON_ROW - 1; i < SEAT_CODE_TOTAL_LEN; i++) {
      dirArrayCols[i-7] = code[i] === 'L' ? -1 : 1;
    }
    this.column = binarySearch(cols, dirArrayCols, 0) + ZERO_BASED_INDEX_OFFSET; // Returns 1-based number, but the assignemnt is using 0-based row number 
  }

  get seatRow(): number { // Returns seat row number
    return this.row;
  }

  get seatColumn(): number { // Returns seat column number
    return this.column;
  }
  
  get id(): number {
    return this.row * NUMBER_OF_SEATS_ON_ROW + this.column;
  }
}