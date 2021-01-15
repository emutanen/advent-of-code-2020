import fs from 'fs';
const path = require('path');

export class FileReader<T> {
  items: T[] = [];
  
  constructor(
    public filename: string,
    public dataMapMethod: (itemData: string) => T,
    public dataDelimiter: string = '\n',
    public multiLineItems: Boolean = false
    ) {}

  read(): void {
    const data = fs.readFileSync(path.resolve(__dirname, this.filename), {
      encoding: 'utf-8'
    }).split(this.dataDelimiter);

    let itemData: string = '';

    if(this.multiLineItems) {
      data.map(lineData => {
        itemData+=lineData+' ';
        if(lineData === '' && itemData !== '') {
          this.items.push(this.dataMapMethod(itemData.substring(0, itemData.length - 2)));
          itemData = '';
        }
      });
    } else {
      this.items = data.map(this.dataMapMethod);
    }
  }
}