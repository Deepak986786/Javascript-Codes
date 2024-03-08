
function CreateFormObject(...inputIds){

    var object ={}
    for (const id of inputIds) {
        
        var control = $("#"+id);
        object[id] = control.val();
    }

    return object
}