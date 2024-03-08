$(function(){
    $("[hide]").hide()

    $("[toggle-target]").on("click",function(){
        var toggleId="#"+$(this).attr('toggle-target')
    })

    $("[toggle-target]").each(function(){
        $(this).css("cursor","pointer")
        var id="#"+$(this).attr('toggle-target');
        $(this).on("click",function(){
            $(id).toggle();
        })
    })

});