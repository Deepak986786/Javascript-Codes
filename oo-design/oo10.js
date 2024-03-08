Object.prototype.log=function(prefix=""){
    console.log(`${prefix}  ${this.toString()}`)
}

// now log mehtod is available to every object

function Book(title,author,price){


    this.title=title
    this.author=author
    this.price=price
}

Book.prototype.toString=function(){return `Book[title=${this.title}\t author=${this.author}\t price=${this.price}]`}

var books=[
    new Book('The Accursed God','Vivek dutta mishra',300),
    new Book('Kane and Abel', 'jeffrey archer',700)
]

for (const book of books) {
    book.log();
}
var n=29

n.log('number is ');

var list=[1,2,3,4,5,6,7]
list.log('my list')
