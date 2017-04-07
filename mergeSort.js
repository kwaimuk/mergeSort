

/* jshint esversion: 6 */
var mergeSort = (arr) => {
  //base case if the arr is length 1 or 0
  if (arr.length<2){
    console.log(arr);
    return arr;
  }

  // 1) pick a pivot in the middle of the arr
  const pivot = Math.ceil(arr.length/2);
  // 2) spilt arr in the half at the pivot
  const pleft= arr.slice(0,pivot);
  const pright = arr.slice(pivot, arr.length);

  //3) recursivly call merge sort until we have
  //completely split up the arr
  const left = mergeSort(pleft);
  const right = mergeSort(pright);

  //4 once we have broken it up, merge the the split halves back up
  return merge(left,right);

};
module.exports = mergeSort;

const merge = (left,right) => {
  const result = [];
  while (left.length > 0 && right.length > 0){
    if(left[0] < right[0]){
      result.push(left.shift());
    }else{
      result.push(right.shift());
    }
  }
//while there are still elements in left do this
  while(left.length>0){
    result.push(left.shift());
  }

  while(right.length>0){
    result.push(right.shift());
  }
  return result;
console.log(mergeSort(arr));
}