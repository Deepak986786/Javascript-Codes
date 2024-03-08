
let a=[1,2,3,[4,5,6 ,[7,8,9]]];

// console.log(a.flat(2))

Array.prototype.myFlat = function (){
   return flattenArray(this);
}

let newArray =[];
function flattenArray(arr) {
    for (let i=0; i<arr.length; i++) {
        if(Array.isArray(arr[i])){
            flattenArray(arr[i]);
        }
        else{
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

console.log(a.myFlat());