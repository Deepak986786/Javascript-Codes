var authorManager = new AuthorManager();

function displayAllAuthors() {
    //update on the view
    var authorView = $("#authors");
    authorView.empty();

    //model
    authorManager.getAll((authors) => {
        authors.forEach((author) => {
            authorView.append(`
                    <tr id='tr-${author.id}' >
                    <td>
                        <img src="${author.photoUrl}"/>
                    </td>
                    <td>${author.name}</td>
                    <td>
                        <a class="btn btn-primary bg-dark" href="./author-details.html?q=${author.id}">Details</a> 
                        <a class="btn btn-primary" href="./author-edit.html?q=${author.id}">Edit</a> 
                        <button class="btn btn-danger" onClick='deleteAuthor("${author.id}")' >Delete</button> 
                    </td>
                </tr>`);
        });

        console.log("fetching data");
    });
}

function deleteAuthor(id) {
    var author = authorManager.getById(id, (author) => {
        console.log(author);
        confirmAndDelete(author, () => {
            authorManager.deleteAuthor(author.id, () => {
                $(`#tr-${author.id}`).remove();
            });
        });
    });
}

// call your function on body onload and here search for params  and then update the value of dom node using 
// jquery  -- no need to generate page here jsut update the value 

function GetDetailsById(id) {
    var detailsView = $("#details-div");
    // console.log(detailsView);
    detailsView.empty();

    authorManager.getById(id, (author) => {
        console.log(author);
        detailsView.append(
            `<div class="col-6  p-2">
            <img src="${author.photoUrl}" />
            </div>
    <div class="col-6  p-2">
          <h3>${author.name}</h3>
          <h6>${author.birthDate}</h6>
          <h6>${author.biography}</h6>
          
    </div>
    <div class="col-6  p-2">
            <h6>Email : ${author.social.email}</h6>
            <h6>Website : ${author.social.webSite}</h6>


    </div>
    <div class="col-6  p-2">
     <h6>Tags : ${author.tags.toString()}</h6>
    </div>
            `
        );
    });
}

function confirmAndDelete(author, deleteAction) {
    console.log(author.name);
    $(".author-name").html(author.name); //add author name in the modal
    $("#author-delete-button").off(); //remove any previous event hanlder
    $("#author-delete-button").on("click", function () {
        deleteAction(); //run delete action
        $("#authorDeleteConfirmationModal").modal("hide");
    }); //on click of delete button do this
    $("#authorDeleteConfirmationModal").modal("show");
}

//on body load. only when DOM is ready
//$(displayAllAuthors);

$(function () {
    //   $("#status").html("Please fill all the fields");
    //   $("#author-form").on("submit", addAuthor);
});

function addAuthor(e) {
    e.preventDefault();

    var author = createFormObject(
        "id",
        "name",
        "biography",
        "tags",
        "birthdate",
        "deathdate",
        "photourl"
    );

    author.social = createFormObject("email", "website");

    //console.log(author);

    authorManager.addAuthor(author, () => {
        window.location.href = "/authors.html"; //move to this document
    });

    //    console.log('all authors', authorManager.getAll());
}
