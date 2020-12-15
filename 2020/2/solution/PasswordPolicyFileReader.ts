import fs from 'fs';
const path = require('path');
import { PasswordPolicy } from './PasswordPolicy';

export class PasswordPolicyFileReader {
  data: PasswordPolicy[] = [];
  
  constructor(public filename: string) {}

  read(): void {
    this.data = fs.readFileSync(path.resolve(__dirname, this.filename), {
      encoding: 'utf-8'
    }).split('\n')
    .map((row: string): PasswordPolicy => {
      const itemSplit = row.split(':');
      return {  policy: itemSplit[0],
                password: itemSplit[1].trim()
              }
    });
  }
}