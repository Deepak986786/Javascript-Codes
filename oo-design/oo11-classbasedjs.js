class Person{
    constructor(name,email){
        this.name=name
        this.email=email
    }

    toString(){
        return `Person [Name=${this.name} \t email=${this.email}]`
    }
} 


class Employee extends Person{
    lastId=0

    constructor(name,email,salary){
        super(name,email)
        this.id=++Employee.lastId
        this.salary=salary
    }

    work(){
        console.log(`${this.name}  works as Employee#${this.id} for salary=${this.salary}`);
    }
}

Person.prototype.eat=function(food){
    return `${this.name} eats ${food}`
}