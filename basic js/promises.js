

var promise= new Promise(function(resolved,reject){
      

  if(false){  
    //handle rsolved
    resolved({name:"deepak"})
 }
 else{
 //handle error

     reject({error:202,msg:"failed"})
} 
});

promise.then(data=>console.log(data)).catch(error=>console.log(error));

//

function factorial(number){

    var promise = new Promise(function(resolve,reject){

        if(number < 0){
            return reject(new Error("Invalid Number"))
        }
        var f=1
        while(number)
            f*=number--
        
            resolve(f);
    })

    return promise
}



function testFactorial(n){
    factorial(n)
            .then(fn=>console.log(fn))
            .catch(error=>console.log(error.message));

    console.log("calculating  factorial of" +n);
}

testFactorial(5)
testFactorial(-1)
testFactorial(7);





//  async -await promise handling --------   use try catch 
//if promise is resolved it comes in try and return data using await 

// if proimise is rjected .. it goes into catch block; 



const findPrimeAsync=async(min,max)=>{
    var result=[]

    if(max<=min)
        throw new Error(`invalid range ${min}- ${max}`);

    for(let i=min;i<max;i++){
        if(i%1000 ==0 )
            await delay(1)
        if(isPrime(i))
            result.push(i)    
    }    
    return result
}