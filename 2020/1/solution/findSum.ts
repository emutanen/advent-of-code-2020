export function findSum(data: string[], targetSum: number) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (i === j) {
        console.log(`Skipping index j=${j} in index i=${i}`);
        continue;
      } else if (parseInt(data[i]) + parseInt(data[j]) === targetSum)
        console.log(`Found correct answer: Numbers ${data[i]} and ${data[j]} found at indices ${i} and ${j} respectively`);
    }
  }
}