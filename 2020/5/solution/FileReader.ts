import fs from 'fs';
const path = require('path');

export class FileReader<T> { // T can be e.g. MapData
  rows: T[] = [];
  
  constructor(
    public filename: string,
    public dataMapMethod: (row: string) => T
    ) {}

  read(): void {
    this.rows = fs.readFileSync(path.resolve(__dirname, this.filename), {
      encoding: 'utf-8'
    }).split('\n')
    .map(this.dataMapMethod);
  }
}