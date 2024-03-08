
$(function(){

    $("[hide]").hide();

    $("[toggle-action-show-all]").on("click",function(){

        $("[toggle-target").each(function(){
            var id="#"+$(this).attr('toggle-target');
            $(id).show(1000);
        });

    });

    $("[toggle-action-hide-all]").on("click",function(){

        $("[toggle-target").each(function(){
            var id="#"+$(this).attr('toggle-target');
            $(id).hide(1000);
        });

    });


    $("[toggle-target]").each(function(){

        $(this).css('cursor','pointer');
        var id="#"+$(this).attr('toggle-target');

        $(this).on('click',function(){
            
            $(id).toggle(1000);
        });

    });

});