

var authorManager=new AuthorManager();

document.body.onload=function(){
    
    //model
    var authors= authorManager.getAll();

    //update on the view
    var authorView=document.getElementById("authors");

    authorView.innerHTML=''; //clear

    authors.forEach(author=>{

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

        authorView.innerHTML +=tr;


    });

    
}