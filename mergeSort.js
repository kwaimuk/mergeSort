/* jshint esversion: 6 */
var mergeSort = (arr) => {
  if(arr.length <= 1){
    console.log("hiho",arr);
    return arr;
  }

    var halfpoint = parseInt((arr.length) / 2);
    var left   = arr.slice(0, halfpoint);
    var right  = arr.slice(halfpoint, arr.length);

console.log("left",left);
console.log("right",right);

return merge(mergeSort(left),mergeSort(right));
};

function merge(left, right)
{
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());

        } else {
            result.push(right.shift());
        }
        console.log("left",left);
        console.log("right",right);
    }

    while (left.length>0){
        result.push(left.shift());
        console.log("leftl",left);
        console.log("rightl",right);
    }

    while (right.length>0){
        result.push(right.shift());
        console.log("leftr",left);
        console.log("rightr",right);
    }
    return result;
}





module.exports = mergeSort;
