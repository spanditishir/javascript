function kitchen()
{
    const fruits =["apple","mango","banana"];
    let number=5;
    function makeJuice()
    {
        const fruit= fruits.shift();
        if(fruit)
            return `You ${fruit} juice is ready`;
        return `No fruit found! ${number}`;
    }
    return makeJuice;
}
const juiceKitchen = kitchen();
console.log(juiceKitchen());