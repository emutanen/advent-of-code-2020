import { HandheldCommand } from './HandheldHaltingDataMapping';

export class Engine {
  private cmdsExecuted: number[];
  private cmdsSwapped: Boolean[];
  private loopSwapped: Boolean = false;

  constructor(public operationList: HandheldCommand[], private accumulator: number) {
    this.cmdsExecuted = this.createValArray(operationList.length, 0);
    this.cmdsSwapped = this.createValArray(operationList.length, false);
  }

  createValArray(len: number, val: any) {
    return Array(len).fill(val);
  }

  swapNopJump(op: HandheldCommand): HandheldCommand {
    if(op.command === 'nop') return { command: 'jmp', value: op.value };
    if(op.command === 'jmp') return { command: 'nop', value: op.value };
    return op;
  }

  acc(accumulate: number) {
    this.accumulator+=accumulate;
    // console.log(`Accumulate: accumulator now ${this.accumulator}`);
  }

  run(swap: Boolean): number {
    // Setup for each loop through program
    this.cmdsExecuted = this.createValArray(this.operationList.length, 0);
    this.accumulator = 0;
    this.loopSwapped = false;

    for(let i = 0; i < this.operationList.length; i++) {
      let op = this.operationList[i];
        if(this.cmdsExecuted[i] > 0) {
          if(swap) {
            console.log(`We swapped command on line ${i}`);
            return -1;
          }
          console.log(`We are in infinite loop! Accumulator value before the operation is `, this.accumulator);
          return -1;
        }

        if(swap) {
          if(!this.cmdsSwapped[i] && !this.loopSwapped){
            op = this.swapNopJump(op);
            this.cmdsSwapped[i] = true;
            this.loopSwapped = true;
  
          }
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
            console.error('program error! unknown command input');
        }

    }
    return this.accumulator;
  }
}