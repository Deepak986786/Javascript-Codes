
var authormanager= new AuthorManager();


function displayAllAuthors(){

    //model get array

    var authors= authormanager.getAll()

    //update author on view 

    var authorView= document.getElementById("authors-div");

      authorView.innerHTML="";

      authors.forEach(author=>{
        var itemdiv=`
          
        <div class="row bord-grey" >
            <div class="col-6  p-2 d-flex justify-content-center ">
               <img src="${author.photoUrl}"  width="150px"  height="150px"/>
            </div>
            <div class="col-6  d-flex justify-content-center align-items-center" id="showdetail">
               <h3 " > ${author.name}</h3>
            </div>
            
           <div class="row  d-flex" id="a-details">
            <div class="col-6  justify-content-center" id="author-detail">
                <p> Id : ${author.id}</p>
                <p> Biography : ${author.biography}</p>
            </div>
            <div class="col-6  justify-content-center" id="author-detail">
                <p> Email : ${author.email}</p>
                <p> Website : ${author.website}</p>
            </div>
           </div>


        </div>
        `;
        authorView.innerHTML+=itemdiv;
      });

    


} 

// function showAuthorDetails(){
//     $("#author-detail").each(function(){
//         $(this).toggle();
//     });
// }

$(displayAllAuthors);

$(function(){
    $("#a-details").hide();
    $("#showdetail").on("click",function(){
        $(this).toggle();
    });
})

function handleSubmit(event){
  event.preventDefault();

  var author = createObjectForm('id','name','photourl','biography','birthdate','deathdate','tags');
  author.social = createObjectForm("email","website");

  console.log(author)

}
