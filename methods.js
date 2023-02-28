const student={
    name:'Rakib Khan',
    study:'Math',
    subjects:['calculus', 'algebra', 'geometry'],
    exam:function () {
        return this.name+" is participate in exam";
    },
    improve:function (subject) {
        this.exam()
        return `${this.name} need improvement exam in ${subject}`
    },
}
// console.log(student);
console.log(student.exam());
const retest=student.improve('algebra');
console.log(retest);
