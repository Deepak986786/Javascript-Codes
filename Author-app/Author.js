// function Author(id , name , biography , birthdate , photourl , email , website ){
//     this.id = id
//     this.name = name
//     this.biography = biography
//     this.birthdate = birthdate
//     this.photourl = photourl
//     this.email=email
//     this.website = website

//     this.books=[]

    
// }

// function AuthorManager(){
//     this.Authors = []

//     this.Add=(id , name , biography , birthdate , photourl , email , website)=>{
//         this.Authors.push( new Author(id , name , biography , birthdate , photourl , email , website));
//     }


//     this.GetAllAuthors=()=>{
//         return this.Authors
//     }

//     this.GetById=(id)=>{
//         return this.Authors.find(author=>author.id == id);
//     }
// }