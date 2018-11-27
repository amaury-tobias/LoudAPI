$(document).ready(function () {
    var request = $.ajax({
        type: "GET",
        url: "/api/contratos",
        data: {},
        dataType: 'json'
    });
    request.done(function (data) {
        console.log(data);
        
    });
    request.fail(function (err) {
        console.log(err);
    });
});

function deleteUser(id) {
    var request = $.ajax({
        type: "DELETE",
        url: "/api/user",
        data: {id},
        dataType: 'json'
    });
    request.done(function (data) {
        alert('Usuario eliminado.');
        location.reload();
    });
    request.fail(function (err) {
        alert('Error al eliminar (Contacte con el Administrador)');
    });
}
