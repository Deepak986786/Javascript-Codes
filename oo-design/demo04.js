

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

function drivingShcool(person, vehicle){

    if(person.age<18)
        return console.log(`dear ${person.name} you need to wait for ${18-person.age} years to learn driving`);


    
    if(person.licenses)
    {
        return person.licenses.push(vehicle);
    }

    person.licenses=[vehicle];

    person.drive=function(v){
        for(var lv of person.licenses){
            if(lv===v)
                return console.log(`${person.name} drives ${v}`);
        }
        
        return console.log(`${person.name} is not allowed to drive ${v}`);
        
    }
}


sanjay.eat("Lunch");
shivanshi.eat("Maggi");

drivingShcool(sanjay, 'Car');
drivingShcool(sanjay, 'Bike');

drivingShcool(shivanshi,'Bike');


sanjay.drive('Car');
sanjay.drive('Truck');

shivanshi.drive('Bike');




