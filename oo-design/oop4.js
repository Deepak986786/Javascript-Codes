
// factory or function method to create multople objects of same type
function createPerson(name,age){
    var person=new Object();
    person.name =name;
    person.age=age

    person.eat=function(food){
        console.log(`${this.name} eats ${food}`)
    }
    return person
}


var person1 = createPerson("deepak", 23)
var person2 = createPerson("rahul", 20)

person1.eat("maggi")

// constructor method 

