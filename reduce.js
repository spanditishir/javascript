/**
 * 
 * 1. Reduce is a highter order function, means it takes another function as it's parameter.
 * 2. callback function, optional initial value
 * 3. callback function has 4 parameters, previousvalue, currentvalue, currentintex?, array?
 * 4. If initialvalue is not passed previousvalue==> arr[0] and currentvalue[1]
 */

console.log([1,2,3,4,5,6,7,8,9].reduce((sum, curr)=>sum+curr));

// Reduce has a sibling method call reduceRight

console.log([1,2,3,4,5,6,7,8,9].reduceRight((diff, curr)=>diff-curr));