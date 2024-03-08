function createAuthor(name,biography){
    var author=new Object();
    author.name=name
    author.biography = biography
    author.books=[]
    author.addBook=(book)=>{
        book.author =author
        author.books.push(book);
    }
    author.toString=()=>{
        return `Author [ Name =${author.name} \t Biography=${author.biography}]`
    }

    return author
}


var authorVivek = createAuthor("vivek-dutta" , "Author of the lost epic series")
var authorDinkar= createAuthor("Ramdhari singh ", "author of rahsmirathi poem")


// console.log("a1" , a1);




function CreateBook(title, author , price){
    this.title =title
    this.price = price
    this.author=author
    this.addBook(this)

    this.toString=()=>{
        returns `Book[Title=${this.title} \t Author=${this.author.name} \t Price="${this.price}]`
    }
}


var book1 = new CreateBook("the accursedgod ", "Vivek",2000)
var book2 = new CreateBook("Brethren","John Grisham \t ", 300)

