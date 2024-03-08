
var container=$("#root");

function LoadPage(url){
    var mainurl="./components/"+url+".html";
    if(url == undefined){
        container.load("./components/home.html")
    }
    else{
        //container.load(mainurl);
      //  window.location.pathname=url;

      $.get(mainurl,response=>{
        container.html(response);
        switch (url) {
            case "author":
                displayAllAuthors();
                break;
            
            case "author-details":
                getAuthorById();
                break;
            default:
                console.log("default-route");
                break;
        }
      });
    }
}


function getClock()
{
    var count=$("#counter");
    var date = new Date().toLocaleTimeString();
    count.html(date);

}

$(function(){
        getClock();
     setInterval(()=>getClock,1000);
    
})


// getClock();