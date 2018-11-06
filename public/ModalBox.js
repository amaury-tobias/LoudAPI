function openModalBox(cb, modal)
{    
    var a = document.getElementById(cb);    
    var b = document.getElementById(modal);

    b.style.display = "flex";

    window.onclick = function(event) 
    {
        if (event.target == b) 
        {
            b.style.display = "none";
            a.checked = false;
        }
    } 
}