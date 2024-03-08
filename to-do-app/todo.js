
var taskTitle= document.getElementById("taskTitle");
var taskList = document.getElementById("taskList");

console.log(taskTitle);
function addTask(){
    var title = taskTitle.value;
    taskList.innerHTML +=`<li>${title}</>`;
}
