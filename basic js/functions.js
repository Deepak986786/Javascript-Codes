// IIFE
//  (function plus(x,y){
//     console.log(x+y,x-y)
//     return [x+y,x-y]
//  }(20,20))

//  //console.log(plus(10,20));


// function plus(x,y){
//     return x+y
// }

// console.log(plus(1,3));
// console.log(plus(1,2,3,4,5));
// console.log(plus(2));

// function Sum(x)
// {
//     var sum=0
//     for (const item of arguments) {
//         sum=sum+item
//     }
//     return sum
// }

// function sum2(...values)
// {
//     var sum=0
//     for(let value of values)
//         sum+=value

//     return sum    
// }

// console.log(Sum(1,2,3,4,5))
// console.log(sum2(1,2,3,34))

// rest para,metre

// function rest(x,y,...values)
// {
//     console.log(`x=${x} and y=${y} and rest=${values} and arg = ${arguments}`)
// }

// rest(1,2,3,4,5,6)


// function Average(...value){
//     // var avg=0
//     // var sum = sum2(...value)
//     // avg=sum/value.length

//     // return avg
//     return sum2(...value)/value.length
// }

// console.log(Average(1,2,3,4,5,5))

//onsole.log(...[1,2,3,4]);

////       spread operator

// var num1=[1,2,3,4]
// var num2=[6,7,8,9,10]
// console.log([...num1,5,...num2])


//    function is a object 

function plus(a,b){return a+b}

var sum=plus
console.log(typeof plus);
console.log(sum(4,6));


var diff=function(a,b){
    return a-b
}

console.log(typeof minus);
console.log(typeof diff);
console.log(diff(10,5));

var mul=(x,y)=>x*y
console.log(mul(10,20));

