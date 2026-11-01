export function mergeArrays(arr1: number[], arr2: number[]): number[] {
  const sortedArr1: number[] = arr1.slice().sort((x, y) => x - y);
  const sortedArr2: number[] = arr2.slice().sort((x, y) => x - y);
  const mergedArr: number[] = [];
  let i: number = 0;
  let j: number = 0;

  while (i < sortedArr1.length || j < sortedArr2.length) {
    let curr: number;

    if (
      j >= sortedArr2.length ||
      (i < sortedArr1.length && sortedArr1[i] < sortedArr2[j])
    ) {
      curr = sortedArr1[i];
      i++;
    } else {
      curr = sortedArr2[j];
      j++;
    }

    if (mergedArr.length === 0 || mergedArr.at(-1) !== curr) {
      mergedArr.push(curr);
    }
  }

  return mergedArr;
}
