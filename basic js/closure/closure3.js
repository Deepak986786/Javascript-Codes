function multiplierOf(number){
    return x=>number*x;
}

var m19=multiplierOf(19)
var m23=multiplierOf(23)

for(let i=1;i<=10;i++){
    console.log(`${m19(i)} \t\t ${m23(i)}`);
}