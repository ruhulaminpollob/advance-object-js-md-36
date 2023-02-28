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