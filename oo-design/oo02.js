

//  method 1 to initialize object in js
// var p=new Object()

// p.name="Deepak"
// p.email ="dks@gmail.com"

// console.log(p);

// console.log(JSON.stringify(p));

//method 2 to initialize as a json
var p2 = {
    name :"Deepak k singh",
    email : "myemail.brillio.com"
}

console.log(p2);

// method 3

var d=new Object();

d["name"] = "Dks"
d["password"] = "mypassword"

for (const key in d) {
    if (Object.hasOwnProperty.call(d, key)) {
        const element = d[key];
        console.log(key);
        console.log(element);
    }
}

console.log(d);