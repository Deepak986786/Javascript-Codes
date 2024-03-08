

function createPeson(name, age){
    
    var person=new Object(); //we get another object

    person.name=name;
    person.age=age;

    person.eat=function(food){
        console.log(`${this.name} eats ${food}`);
    }

    return person;
    
}


var sanjay= createPeson("Sanjay",50);
var shivanshi= createPeson("Shivanshi",15);

sanjay.eat("Lunch");
shivanshi.eat("Maggi");








