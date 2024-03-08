
function withCounter(fn){

    var proxy = (...params)=>{
        return fn(...params);
    }

    return proxy
}

var plus=(x,y)=>x+y;

var x= withCounter(plus)

var result= x(10,12);

console.log(result);