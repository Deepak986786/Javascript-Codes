var list=[1,2,3,4,5,6,7,8,9,9,9,120,10,1,1,12,33,44]

var tasks = [
    {title:"learn jquery" , done: false},
    {title:"implement bookapp" , done: false},
    {title:"implement repsitory" , done: false},
    {title:"laern js" , done: false},
    {title:"learn c# " ,done: false},
    {title:"implent jquery" , done: false}



]

function where(list,matcher){

    var result=[]
    for (const value of list) {
        if(matcher(value))
        {
            result.push(value)
        }
    }
    return result
}

console.log(where(list,(a)=>a%2!=0));

var pendingimplementation = where(tasks,task=>!task.done && task.title.indexOf("implement")>=0);

console.log("pending implementation" , pendingimplementation);


function select(tasks , converter){
    var result=[]

    for(var item of tasks){
        result = converter(item)
    }
    return
}


var report = select(tasks , task=>`${task.title} ... ${task.done ? "done":"pending"}`);

console.log("report" , report)


///    for each

var newlist=list.forEach(x=>console.log(x*100))
console.log(newlist)