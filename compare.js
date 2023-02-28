const fast={a:2,b:3};
const second={a:2,b:3};
const third=second;

if (third===second) {
    // console.log('same');
} else {
    // console.log('different');
}

const fastString=JSON.stringify(fast);
const secondString=JSON.stringify(second);


if (fastString===secondString) {
    console.log('same');
} else {
    console.log('different');
}



const num1={a:3,b:6,c:9, d:9};
const num2={b:6,c:9,a:3};

const isEqual=(num1,num2)=>{
    const num1Keys=Object.keys(num1);
    const num2Keys=Object.keys(num2);
    if (num1Keys.length===num2Keys.length) {
        for (const keys of num1Keys) {
            if (num1Keys[keys] !== num2Keys[keys]) {
                return false;
            }
            return true;
        }
    } else {
        return false;
    }

}

const compare=isEqual(num1,num2)
console.log(compare);