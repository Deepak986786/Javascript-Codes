
function createFormObject(...inputIds){

    var object={};

    for(var id of inputIds)
    {
        var control= $("#"+id);        
        
        var objectPropName= control.attr('property-name'); //custom attribute
        if(objectPropName)
             id=objectPropName;
        
        object[id]=control.val();
    }

    return object;
}

 
$("[include-html]").each(function(){
    var includeUrl = $(this).attr('include-html');

    $(this).load(includeUrl);

});