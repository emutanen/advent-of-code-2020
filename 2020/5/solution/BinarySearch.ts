/*
  binarySearch for generic number implementation
  @param arr number[] Contains possible solutions as 1-indexed numbers
  @param dir number [] Depicts direction of the right solution, possible values being -1 and +1
    @info -1 is the direction smaller than mid
    @info +1 is the direction larger than mid
  @param depth number Depicts the iteration depth of called binarySearch stack
  */
export const binarySearch = (arr: number[], dir: number[], depth: number): number => {

  // Most consideration must be put into the mid element
  // In odd lengths of array there is only one mid element
  // In even lengths of array there are 2 mids, lower and higher
  // The lower mid is more reliable and can be computed with the following line
  const mid = Math.floor(arr.length / 2);

  if(arr.length > 2) { // Recursion is only possible with more than 2 elements

    if(dir[0] < 0) {
      
      // F condition = moving low
      const lowerRangeStart = 0; // slice() inclusive
      // When moving low, exclusive upperRangeEnd bound is mid - 1
      const upperRangeEnd = mid - 1 + arr.length % 2 + 1; // slice() exclusive
      // console.log(`Take lower half, keeping rows ${lowerRangeStart} through ${upperRangeEnd - 1}`) // one-off because of exclusive upper splice() range end
      // Check if the array is odd or even
      // If odd, upperRangeEnd is inclusive
      // If even, upperRangeEnd is exclusive
      return binarySearch(arr.slice(lowerRangeStart, upperRangeEnd), dir.slice(1, dir.length), depth+1); // exclusion of slice range end in this case
    } else if(dir[0] > 0) { 
      
      // B condition = moving high
      const lowerRangeStart = mid + arr.length % 2; // slice() inclusive, non-zero indexed
      // When moving high, inclusive lowerRangeEnd bound is mid + 1
      const upperRangeEnd = arr.length; // slice() exclusive, non-zero indexed
      // console.log(`Take upper half, keeping rows ${lowerRangeStart} through ${upperRangeEnd - 1}`);
      // Check if the array is odd or even
      // If odd, lowerRangeStart is inclusive
      // If even, lowerRangeStart is exclusive
      return binarySearch(arr.slice(lowerRangeStart, upperRangeEnd), dir.slice(1, dir.length), depth+1);
    }
  } else {
    // No recursion, we have found a result that is either upper or lower number
    if(dir[0] > 0) {
      return arr[1];
    } else {
      return arr[0];
    }
  }
}