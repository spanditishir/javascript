function test()
{

}
console.dir(test) 
// it contains prototype property
// dir() is used to get all properties of an object/function. 

const myobj={}
console.log(myobj); // it contains [[Prototype]] which is hidden. You can access it though __proto__ property of object.

//1. Object prototype holds the constructor function's prototype.