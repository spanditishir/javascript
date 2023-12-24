console.log(number);
var number=5;
console.log(number);
//1.  var and function declaration are hoisted

//2. let, const, and class are hoisted but gives error
//console.log(new Employee());
class Employee
{
    name="shashikant";
}
console.log(new Employee().name);