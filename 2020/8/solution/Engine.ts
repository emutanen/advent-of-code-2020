import { HandheldCommand } from './HandheldHaltingDataMapping';

export class Engine {
  private cmdsExecuted: number[];

  constructor(public operationList: HandheldCommand[], private accumulator: number) {
    this.cmdsExecuted = Array(operationList.length).fill(0);
  }

  run(): number {
    for(let i = 0; i < this.operationList.length; i++) {
      const op = this.operationList[i];
      if(this.cmdsExecuted[i] > 0) {
        console.log(`We are in infinite loop! Accumulator value before the operation is `, this.accumulator);
        return this.accumulator;
      }
      const cmd = op.command;
        switch(cmd) {
          case 'acc': 
            this.acc(op.value);
            this.cmdsExecuted[i]++;
            break;
          case 'nop':
            // console.log(`NO OPeration`);
            this.cmdsExecuted[i]++;
            break;
          case 'jmp':
            // console.log('jump! with value ', op.value);
            this.cmdsExecuted[i]++;
            i+=op.value - 1; // because for will adjust i++ at the end of this loop
            if(i < 0 || i > this.operationList.length) {
              console.error(`Jump command error, index at ${i}`);
            }
            break;
          default: 
            console.error('program error!');
        }

    }
  }

  acc(accumulate: number) {
    this.accumulator+=accumulate;
    // console.log(`Accumulate: accumulator now ${this.accumulator}`);
  }
}