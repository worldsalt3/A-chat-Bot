function username() {
    
}

$(function(){

    $("#textbox").keypress(function(event){ 
        if (event.which == 13){
            if($("#enter").prop("checked")){
                $("#send").click();
                event.preventDefault();
            }
        } 
    });

    $("#send").click(function(){
        
        let userMessage = $("#textbox").val();

        let prevState = $("#user-message").html();

        $("#user-message").html( userMessage);

        if (prevState.length == 0) {
            prevState = prevState + "<br>";
        };

        $("#textbox").val("");

        $("#container").scrollTop($("#container").prop("scrollHeight"));


    });


});