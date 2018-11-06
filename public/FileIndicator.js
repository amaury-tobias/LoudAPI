function setFileIndicators()
{
    var inputs = document.querySelectorAll(".fileInput");
    Array.prototype.forEach.call(inputs, function(input)
    {
        var label = input.nextElementSibling;
        var labelVal = label.innerHTML;

        input.addEventListener("change", function(e)
        {            
            var fileName = "";
            if(this.files && this.files.length > 1)
                fileName = ( this.getAttribute("data-multiple-caption") || "").replace("total", this.files.length);
            else
                fileName = e.target.value.split( '\\' ).pop();                    

            if(fileName)
                label.innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });
    });
}