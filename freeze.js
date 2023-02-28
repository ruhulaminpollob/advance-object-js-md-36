const bottle={
    color:'green',
    isClean:true,
    price:'200 taka',
    capacity:2,
}
const keys=Object.keys(bottle);
// console.log(keys);
const values=Object.values(bottle);
// console.log(values);
const pair=Object.entries(bottle)
// console.log(pair);


delete bottle.isClean;
console.log(bottle);

Object.seal(bottle)
delete bottle.color;
console.log(bottle);
bottle.price=400;
console.log(bottle);
Object.freeze(bottle)
