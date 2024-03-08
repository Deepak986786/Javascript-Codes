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

function FindPrimesSync(min,max){
    var result=[]
    for (let i = min; i <= max; i++) {
        if(isPrime(i)){
            result.push(i);
        }
        
    }
    return result;
}

function primeTest(min,max){
    console.log(`finding primes between ${min} - ${max}`);
    var result = FindPrimesSync(min,max);
    console.log(`totals prim number are ${result.length}`);
}

var p100000= primeTest(2,200000);
var p100 = primeTest(2,100);
