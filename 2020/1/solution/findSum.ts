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

export function findThreeSum(data: string[], targetSum: number) {
  for(let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      for (let k = 0; k < data.length; k++) {
        // Check that i and j not same number
        if(i === j) {
          j++;
          k = 0;
        };
        // Check that j and k not same number
        if(j === k) continue;
        // Check that i and k not same number
        if(i === k) continue;
        if(parseInt(data[i]) + parseInt(data[j]) + parseInt(data[k]) === targetSum) {
          console.log(`Found correct answer: Numbers ${data[i]}, ${data[j]}, ${data[k]} found at indices ${i}, ${j}, and  ${k} respectively`);
        } 
      }
    }
  }
}