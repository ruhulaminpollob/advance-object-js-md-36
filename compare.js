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