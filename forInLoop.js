const bottle={
    color:'green',
    isClean:true,
    price:'200 taka',
    capacity:2,
}



console.log(bottle);

for (const key in bottle) {
    console.log(key, bottle[key]);
        
}

// console.log(bottle['color']);

// advanced 


for (const [kye, value] of Object.entries(bottle)) {
    console.log(kye,value);
}

/*
here object.entries(bottle) means a array [.....]
and kye and value  destructure this array value

*/