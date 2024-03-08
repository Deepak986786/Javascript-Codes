$(function(){

})
  



$(function (){
    $("[html-include]").each(function(){

        var includepage=$(this).attr("html-include");
        // console.log(includepage);

        $(this).load(includepage);

    });
})


function qs(key){
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    
    return params[key];
}