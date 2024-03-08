
// var  array=[2,3.5,'hi',90]
// console.log(array.length);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(`element at ${index} : ${element}`);
    
// }

// //  aading items
// for (let i = 10; i < 15; i++) {
//     array.push(i)
// }
// console.log(array)

// console.log(array[100]);
// array[100] = undefined
// console.log(array.length);


// var splicedarray=array.splice(2,3)
// console.log(splicedarray);

// for-in loop    returns the index  of array ----loops through index only
var numbers=[2,3,4,5,66,77,7]
for (const index in numbers) {
    
        //const element = numbers[index];
        console.log(index);  
}

/// for - of  loop   ------------returns value 
for (const value of numbers) {
    console.log(value);
}