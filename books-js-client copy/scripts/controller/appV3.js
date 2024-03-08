

var authorManager=new AuthorManagerV2();

function displayAllAuthors(){
    
    //model
   // var authors= authorManager.getAll();

    //update on the view
    var authorView=document.getElementById("authors");

    authorView.innerHTML=''; //clear

    authorManager.getAll(author=>{

        author.forEach(author=>{
    
            var tr=`
                    <tr>
                    <td>
                        <img src="${author.photoUrl}"/>
                    </td>
                    <td>${author.name}</td>
                    <td>
                        <a class="btn btn-primary bg-dark" href="/author-details.html">Details</a> 
                        <a class="btn btn-primary" href="/author-edit.html">Edit</a> 
                        <a class="btn btn-danger" href="/author-delete.html">Delete</a> 
                    </td>
                </tr>`;
    })

        authorView.innerHTML +=tr;
    });
}

$(displayAllAuthors);

$("#status").html("Please fill all the fields");

$("#author-form").on("submit",function(){
    $("#status").html("author added");
});

function getAuthorFormDetails(){

    var author = CreateFormObject("id","name","photourl","biography","birthdate","tags","deathdate");

    // author.social =CreateFormObject("social_email" , "social_website");
    author.social = CreateFormObject("email","website");

    console.log(author);

    authorManager.AddAuthor(author);

}




