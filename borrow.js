const kodomAli={
    name:'Rakib Khan',
    study:'Math',
    money:5000,
    subjects:['calculus', 'algebra', 'geometry'],
    exam:function () {
        return this.name+" is participate in exam";
    },
    improve:function (subject) {
        this.exam()
        return `${this.name} need improvement exam in ${subject}`
    },
    treetDay:function (amount) {
        this.money=this.money-amount;
        return this.money
    }
}

const result=kodomAli.exam();
// console.log(result);

const badamAli={
    name:'kacha badam',
    money:3000,
}

const result2=kodomAli.exam.call(badamAli)
console.log(result2);
const costs =kodomAli.treetDay.call(badamAli,200);
console.log(costs);
const cost2 =kodomAli.treetDay.call(badamAli,[200]);
console.log(costs);


// that function redeclare with bind

const badamAliTreat=kodomAli.treetDay.bind(badamAli);
const remaining=badamAliTreat(1500);
console.log(remaining);