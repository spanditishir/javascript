function Apple()
{
    return "Apple";
}
function Grinder(fruit)
{
    return `Juice of ${fruit()}`;
}
console.log(Grinder(Apple));