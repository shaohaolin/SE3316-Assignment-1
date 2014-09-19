$(document).ready(function(){
    var list = ["apple", "orange", "banana"];
    for (index=0; index<list.length; index++){  
        $("#fruits").append($("<li></li>").text(list[index]));
    }
 

$("input").click(function(){
    var pickFruit = $("#newfruit").val();
    $("#fruits").find('li').each(function(index) {
        if(pickFruit == $(this).text()) {
            $("#basket").append($("<li></li>").text($(this).text()));
            $(this).remove();        
        }  
    });
});
});