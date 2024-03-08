
let arr = [1,2,3,4,5,6];


Array.prototype.mapArray=function(cb)
{
    var newArr=[];
    // var inputArray=this;
    for (let i = 0; i < this.length; i++){
        newArr.push(cb(this[i],i , this));
    }
    return newArr;
}

// console.log(arr.map(x=>x*10));
console.log(arr.mapArray(x=>x*10));