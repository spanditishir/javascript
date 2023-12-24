//spread
/*
1. expands iterables into individual elements.
2. Spread is always used in function argument
3. In case of rest parameter we can use multiple ...
*/

function spreadEx(el1, el2, el3)
{
    console.log(el1,el2,el3) // "a", "b", "c"
}
spreadEx(...'abc')

//Rest

/**
 * 1. Collects multiple into one
 * 2. Spread is always used in function parameter
 * 3. In case of rest parameter we can use only one ... in the parameter
 */

function restEx(...elems)
{
    console.log(elems);
}

restEx('a','b','c');// ["a", "b", "c"]

const [first, ...others]= [1,2,3]; // here destructuring and rest operator to form single collection from multipe elements (others will have[2,3]);