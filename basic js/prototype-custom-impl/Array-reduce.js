
let arr = [1,2,3,4,5]

// console.log(arr.reduce((acc,x)=>acc+x))

Array.prototype.myReduce =function (initialvalue,cb) {
        let accumulator = initialvalue !=null ? initialvalue : this[0];
         for (let i=0; i<this.length; i++){
               accumulator = cb(accumulator,this[i]);
         }
         return accumulator;

}

console.log(arr.myReduce(0,(acc,value)=>acc+value))