class AuthorManagerV2{

    url ="http://localhost:5000/api/authors";
    constructor(){

    }

    getAll(cb){
        $.getJSON(AuthorManagerV2.url , cb);
    }
}