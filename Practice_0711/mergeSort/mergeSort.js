// Merge function from earlier
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      console.log(results);
      i++;
    } else {
      results.push(arr2[j]);
      console.log(results);
      j++;
    }
  }
  console.log("OUT OF LOOP 1");
  console.log(results);
  while (i < arr1.length) {
    results.push(arr1[i]);
    console.log(results);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    console.log(results);
    j++;
  }
  return results;
}

// Recrusive Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr; // if there's less than two elements, array is sorted
  let mid = Math.floor(arr.length / 2); // find midpoint and split
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([10, 25, 7, 77, 24, 2, 76, 73, 1, 35, 42]));
