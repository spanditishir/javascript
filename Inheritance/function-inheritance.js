function Father()
{
    this.car="Tesla";
}
function Son()
{
    Father.call(this);
    this.bike="MySuperBike";
}
Father.prototype.getCar=function()
{
    return this.car;
}
Son.prototype.getBike=function()
{
    return this.bike;
}

Object.setPrototypeOf(Son.prototype, Father.prototype);
const son = new Son();
console.log(son);

const vehicle={
    car:{
        model:"2012",
        name:"TATA"
    },
    bike:{
        model:"2022",
        name:"Honda"
    }
};