function isPrime(number){
    if(number<2)
        return false
    for(let i=2;i<number;i++)
    {
        if(number%i == 0){
            return false
        }
    }  

    return true;
}

function FindPrimesSync(min,max,cb){
    var result=[]
    for (let i = min; i <= max; i++) {
        if(isPrime(i)){
            result.push(i);
        }
        
    }
     cb(result);
}

function primeAsyncTest(min,max){
    console.log(`finding primes between ${min} - ${max}`);
      FindPrimesSync(min,max,(result)=>{
        console.log(`totals prim number are ${result.length}`);
        
    });
}

var p100000= primeAsyncTest(2,200000);
var p100 = primeAsyncTest(2,100);
