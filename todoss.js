$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
event.stopPropagation();
});


$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        let todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='far fa-trash-alt'></i> </span></i> " + todoText + "</li>");
    }
});

$("i").on("click",function(){
    $("input[type='text'").fadeToggle(300);
});