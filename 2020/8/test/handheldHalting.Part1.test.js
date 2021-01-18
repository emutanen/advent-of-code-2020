import { Engine } from '../solution/Engine';
import { dataMapMethod } from '../solution/HandheldHaltingDataMapping';

const demo_program = ['nop +0',
                      'acc +1',
                      'jmp +4',
                      'acc +3',
                      'jmp -3',
                      'acc -99',
                      'acc +1',
                      'jmp -4',
                      'acc +6'];

test('demo program', () => {
  const commandList = demo_program.map(dataMapMethod); 
  const engine = new Engine(commandList, 0);
  expect(engine.run()).toBe(5);
});