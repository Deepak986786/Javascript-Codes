function Author(id , name , biography , birthdate , photourl , email , website ){
    this.id = id
    this.name = name
    this.biography = biography
    this.birthdate = birthdate
    this.photourl = photourl
    this.email=email
    this.website = website

    this.books=[]

    
}

function AuthorManager(){
    this.Authors = []

    this.Add=(id , name , biography , birthdate , photourl , email , website)=>{
        this.Authors.push( new Author(id , name , biography , birthdate , photourl , email , website));
    }


    this.GetAllAuthors=()=>{
        return this.Authors
    }

    this.GetById=(id)=>{
        return this.Authors.find(author=>author.id == id);
    }
}

var id=document.getElementById("authorid");
var aname=document.getElementById("name");
var biography=document.getElementById("biography");
var photourl=document.getElementById("photourl");
var birthdate=document.getElementById("birthdate");
var email=document.getElementById("email");
var website=document.getElementById("website");

var authorList=document.getElementById("authorlist");

var authormanager = new AuthorManager();


function addAuthor(){
    var _id=id.value
    var _name=aname.value;
    var _biography=biography.value
    var _photourl=photourl.value
    var _birthdate=birthdate.value
    var _email = email.value
    var _website=website.value

    authormanager.Add(_id,_name,_biography,_birthdate,_photourl,_email,_website)

    refreshList();
}

function refreshList(){
    authorList.innerHTML="";

    for (var author of authormanager.GetAllAuthors()) {
        authorList.innerHTML+=`
          <h3>Author Name  : ${author.name}</h3> <br>
          <div class="form">
                <img src="${author.photourl}" alt="authorimg" width="300px" height="300px" />
                <p>${author.email}</p>
                <p>${author.website}</p>

          </div>
          
    
        `
    }
}