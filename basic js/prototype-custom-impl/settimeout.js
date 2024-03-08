           
setTimeout(()=>{
console.log("first")
},1000)

setTimeout(()=>{console.log("second")},0)


function createSetTimeOut(){
     var timerId = 0;
     var timerMap = {}

     function setTimeoutPoly(callback,delay){
        var id=timerId++;
        timerMap[id] = true;
        var start = Date.now();

        function triggerCallback(){
            if(!timerMap[id])return;
            if(Date.now() > start+delay){
                callback();
            }else{
                requestIdleCallback(triggerCallback);
            }
        }
        requestIdleCallback(triggerCallback);
        return id;
     }

     function clearTimeoutPoly(id){
            delete timerMap[id];
     }

     return {setTimeoutPoly , clearTimeoutPoly}
}

var { setTimeoutPoly, clearTimeoutPoly} = createSetTimeOut();

let myId = setTimeoutPoly(()=>{
    console.log("first")
},1000);

let myId2 = setTimeoutPoly(()=>{
    console.log("second")
},500)