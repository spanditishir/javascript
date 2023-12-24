//splice takes (index, number of items to delete, item1, item 2.... to add before in the original deleted array);
//here original array is mutable


// slice take (start index, end index)
// original array is immutable.

let arr=[1,2,3,4,5];
console.log(arr.slice(1,3));
console.log(arr)

console.log(arr.splice(1,3, 1,2,3,4));
console.log(arr)