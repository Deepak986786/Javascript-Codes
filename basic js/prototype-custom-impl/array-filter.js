
let arr=[1,2,3,4,5,6,7,8];


Array.prototype.myFilter = function (cb) {
    let newArray =[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i])){
            newArray.push(this[i]);
        }
        else continue;
    }
    return newArray;
}

console.log(arr.myFilter(x=>x>5));