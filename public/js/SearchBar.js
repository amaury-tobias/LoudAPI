$(document).ready(function(){

    $("#fBuisness").keyup(function(){

        var filter = $("#fBuisness").val().toUpperCase();        
        
        $(".bName").each(function() {
            
            var name = $(this).text().toUpperCase();        
            
            if(name.indexOf(filter) > -1)  
                $(this).parent().parent().css("display", "table-row");  
            else
                $(this).parent().parent().css("display", "none");            
            
        });
                
    });    
                          
});