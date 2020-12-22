import { FileReader } from './FileReader';
import { Forest } from './Forest';
import { ForestDataRow, dataMapMethod } from './ForestMapping';
import { Toboggan } from './Toboggan';

const forestFileReader = new FileReader<ForestDataRow>('../input/input.txt', dataMapMethod);
forestFileReader.read();

const forest = new Forest(forestFileReader.rows);
const toboggan = new Toboggan({horizontalSpeed: 3, verticalSpeed: 1});

// TESTING 2-dimensional matrix lookup
// const TEST_ROW_MAX = 322;
// const TEST_COL_MAX = 108;
// console.log(forestFileReader.rows[TEST_ROW_MAX].cols[TEST_COL_MAX]);

// Simulation loops until the toboggan is not anymore inside the forest
let totalNumberOfTrees = 0;
while(forest.isInsideForest(toboggan.getPosition().row)) {
  const tobogganPosition = toboggan.getPosition();
  console.log(`Toboggan's position: row: ${tobogganPosition.row} and col: ${tobogganPosition.col}`);

  if(forest.isTree(tobogganPosition.row, tobogganPosition.col)) totalNumberOfTrees++;
  toboggan.move();
}

console.log(`Total amount of trees along the toboggan trajectory: ${totalNumberOfTrees} trees!`);
