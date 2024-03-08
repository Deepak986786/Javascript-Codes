
var count = 0;

let id = setInterval(() =>{
   count = count + 1;
   console.log(count);
if(count > 10) clearInterval(id);
},500);
