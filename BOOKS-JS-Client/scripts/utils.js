
function createObjectForm(...inputIDs){

    var object ={};

    for(var id of inputIDs){

        var control = $("#"+id);
        object[id] = control.val();
    }

    return  object;
}