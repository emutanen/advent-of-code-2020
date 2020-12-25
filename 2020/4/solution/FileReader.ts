import fs from 'fs';
const path = require('path');
const INDEX_OF_SECOND_TO_LAST_CHAR_IN_SUBSTR = 2

export class FileReader<T> { // T can be e.g. MapData
  items: T[] = [];
  
  constructor(
    public filename: string,
    public dataMapMethod: (itemData: string) => T,
    public dataDelimiter: string = '\n'
    ) {}

  read(): void {
    const data = fs.readFileSync(path.resolve(__dirname, this.filename), {
      encoding: 'utf-8'
    }).split('\n');

    let itemData: string = '';

    data.map(lineData => {
      itemData+=lineData+' ';
      if(lineData === '' && itemData !== '') {
        this.items.push(this.dataMapMethod(itemData.substring(0, itemData.length - INDEX_OF_SECOND_TO_LAST_CHAR_IN_SUBSTR)));
        itemData = '';
      }
    });
  }
}