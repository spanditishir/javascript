class Father
{
    constructor()
    {
        this.car="Tesla";
    }
}
class Son extends Father
{
    constructor()
    {
        super();
        this.bike="SuperBike";
    }
    getBike()
    {
        return this.bike;
    }
}
const son = new Son();
console.log(son);
//Classe are just syntactical sugar for inheritance. Under the hool it uses prototype for inheritance.