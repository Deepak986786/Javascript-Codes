var parentdiv = document.querySelector(".parent");
var childdiv = document.querySelector(".child");
var btn = document.querySelector(".btn");

parentdiv.addEventListener("click", (event) => {
//   event.stopPropagation();
  console.log("parent");
},{capture:true});

childdiv.addEventListener("click", (event) => {
  console.log("child");
},{capture:true});

btn.addEventListener("click", (event) => {
//   event.stopPropagation();
  console.log("btn");
},{capture:true});
