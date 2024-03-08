
class AuthorManager{
    
    constructor(){
        this.authors=[],
        this._loadRecords()
    }

    _loadRecords(){
        this.authors=[
            {
              "id": "dan-brown",
              "name": "Dan Brown",
              "photoUrl": "https://res.cloudinary.com/bookbub/image/upload/w_340,h_340,c_fill,g_face/v1481676428/dan-brown.jpg",
              "tagList": [
                "fiction",
                " spiritual"
              ],
              "email": "danbrown@contact.info",
              "website":"https://danbrown.com"
            },
            {
              "id": "gandhi",
              "name": "Mahatma Gandhi",
              "photoUrl": "https://pbs.twimg.com/media/FAqPzrrUYAM8pCu.jpg",
              "tagList": [
                "freedom-fighter",
                " indian",
                " social-reformer",
                " autobiography"
              ],
              "email": "gandhi@email.info",
              "website":"https://mggandhi.com"
            },
            {
              "id": "jeffrey-archer",
              "name": "Jeffrey Archer",
              "photoUrl": "https://pbs.twimg.com/profile_images/3751745623/11bd5e198e1f0f7de40ffdf08f556293_400x400.jpeg",
              "tagList": [
                "best-seller",
                " english",
                " fiction",
                " british"
              ],
              "email": "archer@contact.info",
              "website":"https://jarcher.fiction.com"
            },
            {
              "id": "john-grisham",
              "name": "John Grisham",
              "photoUrl": "https://pbs.twimg.com/profile_images/1489356811711004672/NIxWoKfo_400x400.jpg",
              "tagList": [
                "legal fiction",
                " best-seller",
                " fiction",
                "english"
              ],
              "email": "johng9@contact.info",
              "website":"https://grishamjohn.com"
            },
            {
              "id": "vivek-dutta-mishra",
              "name": "Vivek Dutta Mishra",
              "photoUrl": "https://pbs.twimg.com/profile_images/1393255566928015360/i9qVt4oI_400x400.jpg",
              "tagList": [
                "best-seller",
                " english",
                " fiction",
                " indian",
                " mahabharata",
                " epic"
              ],
              "email": "vivekmishra09@gmail.com",
              "website":"https://thelostepic.com"
            }
          ];
    }

    getAll(){
        return this.authors;
    }

    getById(id){
        return this.authors.find(a=>a.id===id);
    }

    removeById(id){
        this.authors=this.authors.filter(a=>a.id!==id);
        this._save();
    }

    addAuthor(author){
        this.authors.push(author);
    }

    _save(){

    }



}
