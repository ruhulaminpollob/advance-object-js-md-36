const student={
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
// console.log(student);
// console.log(student.exam());
const retest=student.improve('algebra');
// console.log(retest);

const remaining=student.treetDay(2999)
console.log(remaining);