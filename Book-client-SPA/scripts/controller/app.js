
var authorManager = new AuthorManager();

$(function () {

    // $("#author-form").on('submit',addAuthor);

    $("#author-info").hide();

});



async function displayAllAuthors() {


    //update on the view
     var authorView = $("#authors");

   //var authorView=document.getElementById("authors");
    console.log('fetching data');
    // authorView.empty();
    // authorView+='';
    authorView.empty();
    console.log(authorView);


    //model
    var authorsdata = await authorManager.getAll();

    authorsdata.forEach(author => {
        authorView.append(`
        <tr id='tr-${author.id}' >
        <td>
            <img src="${author.photoUrl}"/>
        </td>
        <td>${author.name}</td>
        <td>
            <a class="btn btn-primary bg-dark" href="/author-details.html?id=${author.id}">Details</a> 
            <a class="btn btn-primary" href="/author-edit.html">Edit</a> 
            <button class="btn btn-danger" onClick='deleteAuthor("${author.id}")' >Delete</button> 
        </td>
    </tr>`);
    });
   window.authorView=authorView;
   window.authorsdata=authorsdata;
   
}


async function getAuthorById() {

    var id = qs('id');
    $("#status").html("please wait while we load " + id);
    $(".loading").show();

    try {
        var author = await authorManager.getById(id);
        $("#author-info").show();
        $("#status").hide();
        $("#title").html(author.name);
        $("#author-image").attr('src', author.photoUrl);
        $("#biography").html(author.biography);
        if (author.social.email && author.social.email.length)
            $("#email")
                .attr("href", `mailto:${author.social.email}`)
                .html(author.social.email);
        else
            $("#email").hide();

        if (author.social.webSite && author.social.webSite.length)
            $("#web").attr('href', author.social.webSite);
        else
            $("#web").hide();


    } catch (error) {
        $("#status").html("<h2>Author Not Found</h2>");
        $("#author-info").hide();
    }
    $(".loading").hide();

}

function deleteAuthor(id) {

    var author = authorManager.getById(id, author => {

        console.log(author);
        confirmAndDelete(author, () => {

            authorManager.deleteAuthor(author.id, () => {
                $(`#tr-${author.id}`).remove();

            });
        });
    });



}

function confirmAndDelete(author, deleteAction) {

    console.log(author.name);
    $(".author-name").html(author.name);  //add author name in the modal
    $("#author-delete-button").off();     //remove any previous event hanlder
    $("#author-delete-button").on('click', function () {
        deleteAction(); //run delete action
        $("#authorDeleteConfirmationModal").modal("hide");
    });  //on click of delete button do this
    $("#authorDeleteConfirmationModal").modal("show");

}


//on body load. only when DOM is ready
//$(displayAllAuthors);




function addAuthor(e) {

    e.preventDefault();

    var author = createFormObject(
        'id',
        'name',
        'tags',
        'birthdate',
        'deathdate',
        'photourl',
        'biography'
    );

    author.social = createFormObject("email", "website");

    author.birthdate = author.birthdate.replaceAll('/', '-');
    if (author.deathdate.length === 0)
        author.deathdate = null;
    else
        author.deathdate = author.deathdate.replaceAll('/', '-');



    //console.log(author);

    authorManager.addAuthor(author, (error, success) => {
        if (error) {
            console.log('error adding author', error);
            $(".status").html(error);
        }
        else {
            console.log('author added successfully', success);
            window.location.href = "/authors.html"; //move to this document
        }
    });

    //    console.log('all authors', authorManager.getAll());




}
