import { FileReader } from './FileReader';
import { Forest } from './Forest';
import { ForestDataRow, dataMapMethod } from './ForestMapping';
import { Toboggan, TobogganSpeedProfile } from './Toboggan';

const forestFileReader = new FileReader<ForestDataRow>('../input/input.txt', dataMapMethod);
forestFileReader.read();

const forest = new Forest(forestFileReader.rows);

const speedProfiles: TobogganSpeedProfile[] = [ // right=horizontalSpeed down=verticalSpeed
  {horizontalSpeed: 1, verticalSpeed: 1},
  {horizontalSpeed: 3, verticalSpeed: 1},
  {horizontalSpeed: 5, verticalSpeed: 1},
  {horizontalSpeed: 7, verticalSpeed: 1},
  {horizontalSpeed: 1, verticalSpeed: 2}
];

let treesOfTrajectory: number[] = [];

speedProfiles.forEach((speedProfile, index) => {
  // Create new toboggan for each profile
  const toboggan = new Toboggan(speedProfile);

  // Simulation loops until the toboggan is not anymore inside the forest
  let totalNumberOfTrees = 0;
  while(forest.isInsideForest(toboggan.getPosition().row)) {
    const tobogganPosition = toboggan.getPosition();
    console.log(`Toboggan's position: row: ${tobogganPosition.row} and col: ${tobogganPosition.col}`);

    if(forest.isTree(tobogganPosition.row, tobogganPosition.col)) totalNumberOfTrees++;
    toboggan.move();
  }

  treesOfTrajectory.push(totalNumberOfTrees);
  console.log(`Total amount of trees along the toboggan trajectory ${index}: ${totalNumberOfTrees} trees!`);
});

// Finally compute the part 2 answer as multiply found trees for each trajectory
const multipliedResult = treesOfTrajectory.reduce((ans, trees) => {
  return ans*trees
}, 1);

console.log(`Final answer for Solution 3-2 is ${multipliedResult}`);

/* Notes

This is how the 2-dimensional matrix lookup functions
  const TEST_ROW_MAX = 322;
  const TEST_COL_MAX = 108;
  console.log(forestFileReader.rows[TEST_ROW_MAX].cols[TEST_COL_MAX]);

*/
 
