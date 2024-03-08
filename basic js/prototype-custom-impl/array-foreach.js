
let arr=[1,2,3,4,6];

// arr.forEach((x,i)=>this[i]=this[i]+2);


Array.prototype.myForEach = function (cb){
    if(this == undefined || this == null){
        throw new Error("Array.prototype.myForEach is call on null");
    }
    for(let i=0;i<this.length;i++){
        cb(this[i],i,this);
    }
};
var b='';
console.log(arr.myForEach(x=>console.log(x+10)));
console.log(b.myForEach(x=>x));

