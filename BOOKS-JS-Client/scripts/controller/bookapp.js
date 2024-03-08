
var bookmanager= new BookManager();

function displayAllBooks()
{
    var books= bookmanager.getAll();

    //  var bookView=$("#books-div");
   var bookView = document.getElementById("books-div");
    bookView.innerHTML="";

    books.forEach(book=>{
      var itemdiv=`
        
      <div class="row bord-grey" >
          <div class="col-6  p-2 d-flex justify-content-center ">
             <img src="${book.coverurl}"  width="150px"  height="150px"/>
          </div>
          <div class="col-6  d-flex justify-content-center align-items-center" id="showdetail">
             <h3 " > ${book.title}</h3>
          </div>
          
         <div class="row  d-flex" id="b-details">
          <div class="col-6  justify-content-center" id="book-detail">
              <p> Id : ${book.id}</p>
              <p> Details : ${book.bookdetails}</p>
          </div>
          <div class="col-6  justify-content-center" id="book-detail">
              <p> Price : ${book.price}</p>
              <p> Total Pages : ${book.totalpages}</p>
          </div>
         </div>


      </div>
      `;
      bookView.innerHTML+=itemdiv;
    });

}

displayAllBooks();

// $("#a-details").hide();
// var det=document.getElementById("a-details").style.display="none";

// $("#b-details").each(function(){
//     $(this).hide();
// });

var d=document.querySelectorAll("#b-details");
d.forEach(function(div){
    div.style.display="none";
});


$("#showdetail").on("click",function(){
    // $(this).hide();
    // $("#b-details").each(function(b){
    //     $(this).hide();
    // })

    $(this ,"b-details").each(function(){
        $(this).toggle();
    })

});
