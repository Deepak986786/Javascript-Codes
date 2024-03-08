

var person=new Object(); //we get another object

//once an object comes into being, it acquires information and behavior
person.name='Sanjay';
person.age=50;

console.log('p2',person);

console.log('p2.name',person.name);
console.log('p2.age',person.age);

person.eat=function(food){
    console.log(`${this.name} eats ${food}`);
}

person.eat("Lunch");





