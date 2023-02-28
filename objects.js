// create object using object  literals

const player={};
player.name='Shakib Al Hassan';
player.specialty='batsman';

player.bat=function(){
    console.log('swing his bat');
}

console.log(player);
player.bat()

//

const student={
    name:'panday',
    work:'dev',
    ball:function () {
        console.log('throw the ball');
    }
}
// object constructor
const person=new Object();
console.log(person);

// Object create method

// const item=Object.create(null)
// console.log(item);

const atel=Object.create(student);
console.log(atel.name);

// 4. make object by class
class Person{
    name='abul';
    address='sodor ghat';
    constructor(age){
        this.age=age;
    }
}
const person1 = new Person(23);
console.log(person1);

//5 create object by using function


function Car(model, price) {
    this.model=model;
    this.price=price;
}
const tesla=new Car('elon',price)
console.log(tesla);