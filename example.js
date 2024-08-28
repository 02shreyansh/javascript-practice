class person {
    constructor(parameters) {
        this.name = parameters.name;
        this.age = parameters.age;
    }
    introduceSelf(){
        return {name:this.name,age:this.age}
    }
}
class professor extends person{
    teaches;
    constructor(parameters){
        super(parameters);
        this.teaches = parameters.teaches;
    }
    introduceSelf(){
        console.log(`My name is ${this.name} and i am ${this.age} and i will teach ${this.teaches}`);
    }
    grade(v){
        return v>=40?"Pass":"fail";
    }
}
class Student extends person{
    #year;
    constructor(parameters){
        super(parameters);
        this.#year = parameters.year;
    }
    introduceSelf(){
        console.log(`My name is ${this.name} and i am ${this.age} and i am in ${this.#year}`);
    }
    pass(){
        return this.#year >1?"Yes":"no";
    }
}
class user{
    constructor(name,email){
        this.name = name;
        this.email=email;
    }
    courseList=[];
    getInfo(){
        return{name:this.name,email:this.email};
    }
    enroll(name){
        this.courseList.push(name);
        this.courseList.unshift(this.email);
    }
    get(){
        return this.courseList;
    }
}
class randum{
    constructor(num){
        this.num = num;
    }
    random(){
        return (Math.floor(Math.random()*(this.num+1)));
    }
}
export{professor,Student,person,user,randum};