// function  factorial(n){
//     let fn=1;
//     while(n)
//         fn*=n--;
//     return fn    

// }

// var f5 = factorial(5)

// var f6 = factorial(6);


function counter(number){

    function increment(){
        return ++number
    }

    return increment

}


var c1=counter(5)
var c2=counter(100)

console.log("c1",c1());
console.log("c2",c2());
