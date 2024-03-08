
let a = [1,2,3];
let b= [4,5,6];

let value = "deepak";
let value2 = ()=>{};
let value3 = undefined;
let value4 = null;


let arr1=[11,22,33]
let arr2 =[44,55,66]
//concat custom implementation

//ask if fumctions , objects , undefined and null
function pushArrayValue(src , dest){
    for (let i = 0; i < dest.length; i++) {
       src.push(dest[i]);   
    }
    return src;
}

Array.prototype.myConcat = function(){
    const args = arguments;
    const inputArray = this;

    for (let i = 0; i < args.length; i++) {
        if(Array.isArray(args[i])){
            pushArrayValue(inputArray, args[i]);
        }
        else {
            inputArray.push(args[i]);
        }
        
    }

    return inputArray;

}


// console.log(a.myConcat(b , value , value2 , value3 , value4));



console.log(arr1.myConcat(arr2));

