function validateForm()
{
    var a = document.getElementById("password").value;
    var b = document.getElementById("password2").value;
    
    if(a !== b)
    {
        alert("Las contraseñas no son iguales.");        
        return false;
    }
    
    return true;
}