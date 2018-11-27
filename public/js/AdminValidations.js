function validateRecordFilter()
{       
    var d = document.getElementById("rAmount").value;
    var f = document.getElementById("rSort").value; 
    
    if(d == 0 || f == 0)
    {
        alert("Complete la forma de busqueda de registros en el filtro.")
        return false;
    }  
    
    return true;
}

function validateRecordDelete()
{    
    var a = document.getElementById("dAmount").value;
    var c = document.getElementById("dSort").value; 
    
    if(a == 0 || c == 0)
    {
        alert("Complete la forma de eliminación de registros en el filtro.")
        return false;
    }  
    
    return true;
}

function validateInviteUser()
{
    var a = document.getElementById("iURole").value;
    
    if(a == 0)
    {
        alert("Seleccione un rol para el invitado.")
        return false;
    } 
    
    return true;
}

function validateContractsFilter()
{
    var a = document.getElementById("cMonth").value;
    var b = document.getElementById("cZone").value; 
    
    if(a == 0 || b == 0)
    {
        alert("Complete la forma de busqueda de registros en el filtro.")
        return false;
    }  
    
    return true;
}

function validateContractsDelete()
{
    var a = document.getElementById("dMonth").value;
    var b = document.getElementById("dZone").value; 
    
    if(a == 0 || b == 0)
    {
        alert("Complete la forma de eliminación de registros en el filtro.")
        return false;
    }  
    
    return true;
}

function validateAddClient()
{
    var a = document.getElementById("iMonth").value;
    var b = document.getElementById("zone").value;
    var c = document.getElementById("mNumber").value;
    var d = document.getElementById("seller").value;
    
    if(a == 0 || b == 0 || c == 0 || d == 0)
   {
       alert("Complete todos los campos necesarios.")
        return false;
   }
    
    return true;
}

function validateSiteInfo()
{
    var a = document.getElementById("sInfo").value;
    
    if(a == "")
        {
            alert("Seleccione una imagen para cambiar.")
            return false;
        }
    
    return true;
}

function validateSiteMags()
{
    var a = document.getElementById("sImgs").value;
    
    if(a == "")
        {
            alert("Seleccione imagenes para cambiar.")
            return false;
        }
    
    return true;
}

$(document).ready
(
    function() 
    { 
        function forceNumber()
        {
            var $input = $(this);
            $input.val($input.val().replace(/[^\d]+/g,''));
        }
        $('body').on('propertychange input', '.number', forceNumber);  
    }
);