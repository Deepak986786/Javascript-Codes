var plus=function(a,b){return a+b}

var minus=(a,b)=>a-b

function multiply(a,b){
    return a*b
}

var divide=(a,b)=>a/b

function selectOperator(symbol){
    if (symbol === "+") {
        return plus
    } else if(symbol === "-")
        return minus
      else if(symbol === "*")
        return multiply
      else if(symbol === "/")
        return divide
      else
        throw new Error("invalid symbol");    
}

var opr=selectOperator("--")

console.log(opr(10,5));
console.log(opr(10,5));
