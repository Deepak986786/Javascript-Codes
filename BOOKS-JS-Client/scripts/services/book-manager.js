
class BookManager{

    constructor(){
        this.books=[],
        this._loadBooks()
    }

    _loadBooks(){
        this.books=[
            {
                "id":"rashmirathi",
                "title":"Rashmirathi",
                "price": 500.00,
                "totalpages":1280,
                "author":"Ramdhari Singh Dinkar",
                "bookdetails":"Rashmirathi (Rashmi: Light (rays) Rathi: One who is riding the chariot (not the charioteer)) of light is a Hindi epic written in 1952, by the Hindi poet Ramdhari Singh 'Dinkar'.[1] The epic poem narrates the story of Karna who is regarded as one of main protagonist of the Hindu epic- Mahabharata. ",
                "coverurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAR-FCDbXk9mkJCTI6WtxeO0xv6z3WbGLVIZYOG8Xy&s"
            },
            {
                "id":"the-grass-is-alaways-greener",
                "title":"The Grass is Always Greener",
                "price": 1288,
                "totalpages":1180,
                "author":"jeffrey archer",
                "bookdetails":"This ingenious tale examines the ambitions and petty jealousies of the staff at Critchley's Bank. From the doorman to the personnel manager, to Sir William, the bank's sorrowful chairman. Archer knits a panoply of characters with deft narrative skill in a story which is as revealing as it is observant. Taken from his anthology To Cut a Long Story Short, his other short story anthologies include A Quiver Full of Arrows, Twelve Red Herrings and A Twist in the Tale.",
                "coverurl":"http://www.travelman.co.uk/Web/S8300067-2-copy.png"
            },
            {
                "id":"the-book-thief",
                "title":"The Book Thief",
                "price": 568,
                "totalpages":799,
                "author":"Markus Zusak",
                "bookdetails":"By her brother's graveside, Liesel's life is changed when she picks up a single object, partially hidden in the snow. It is The Gravedigger's Handbook, left behind there by accident, and it is her first act of book thievery. So begins a love affair with books and words, as Liesel, with the help of her accordian-playing foster father, learns to read. Soon she is stealing books from Nazi book-burnings, the mayor's wife's library, wherever there are books to be found.",
                "coverurl":"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1522157426i/19063.jpg"
            },
            {
                "id":"the-giving-tree",
                "title":"The Giving Tree",
                "price": 299,
                "totalpages":680,
                "author":"Shel Silverstein",
                "bookdetails":"So begins a story of unforgettable perception, beautifully written and illustrated by the gifted and versatile Shel Silverstein.Every day the boy would come to the tree to eat her apples, swing from her branches, or slide down her trunk...and the tree was happy. But as the boy grew older he began to want more from the tree, and the tree gave and gave and gave.",
                "coverurl":"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1174210942i/370493.jpg"
            },
            {
                "id":"divergent",
                "title":"Divergent",
                "price": 489,
                "totalpages":778,
                "author":"Veronica Roth",
                "bookdetails":"In Beatrice Prior's dystopian Chicago world, society is divided into five factions, each dedicated to the cultivation of a particular virtue—Candor (the honest), Abnegation (the selfless), Dauntless (the brave), Amity (the peaceful), and Erudite (the intelligent). On an appointed day of every year, all sixteen-year-olds must select the faction to which they will devote the rest of their lives. For Beatrice, the decision is between staying with her family and being who she really is—she can't have both. So she makes a choice that surprises everyone, including herself.",
                "coverurl":"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1618526890i/13335037.jpg"
            },
            {
                "id":"wuthering-heights",
                "title":"Wuthering Heights",
                "price": 360,
                "totalpages":977,
                "author":"Emily Bronte",
                "bookdetails":"This best-selling Norton Critical Edition is based on the 1847 first edition of the novel. For the Fourth Edition, the editor has collated the 1847 text with several modern editions and has corrected a number of variants, including accidentals. The text is accompanied by entirely new explanatory annotations.",
                "coverurl":"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630501681i/6185.jpg"
            },
        ]
    }

    getAll(){
        return this.books;
    }
    getById(id){
        return this.books.find(book=>book.id == id);
    }

    removeById(id){
        this.books = this.books.filter(b=>b.id !=  id);
        this._save();
    }

    addBook(book){
        this.books.push(book);
    }

    _save(){
        
    }

}