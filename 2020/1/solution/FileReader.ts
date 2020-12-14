import fs from 'fs';
const path = require('path');

export class FileReader {
  data: string[] = [];
  
  constructor(public filename: string) {}

  read(): void {
    this.data = fs.readFileSync(path.resolve(__dirname, this.filename), {
      encoding: 'utf-8'
    }).split('\n')
    .map((row: string): string => {
      return row
    });
  }
}