var p={
    name:"sanjay",
    email:"sanjay@email.com"
}


function eatv1(person,food)
{
    console.log(`${person.name} eats ${food}`);
}
p.eat=eat

function eat(food){
    console.log(`${this.name} eats ${food}`);

}

p.eat("breakfast");

eatv1(p,"dinner")

// p.eat(p,"lunch");