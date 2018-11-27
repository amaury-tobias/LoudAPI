function openModalBox(cb, modal, contrato, vendedor, anticipo, cliente, dir, tel, folio, meses, espacio, total, id) {
    var a = $(`#${cb}`);
    var b = $(`#${modal}`);

    //b.style.display = "flex";
    b.css('display', 'flex');
    //$('#ModalId').value(id);

    document.getElementById("ModalId").value = id;
    if (contrato === true)
        document.getElementById("cCancelVal0").checked = true;
    else
        document.getElementById("cCancelVal1").checked = true;
    document.getElementById("ModalUser").textContent = vendedor;
    if (anticipo === false)
        document.getElementById("cBonusVal0").checked = true;
    else
        document.getElementById("cBonusVal1").checked = true;
    document.getElementById("ModalClient").textContent = cliente;
    document.getElementById("ModalDir").textContent = dir;
    document.getElementById("ModalTel").textContent = tel;
    document.getElementById("ModalFile").textContent = folio;
    document.getElementById("ModalMonths").textContent = meses;
    document.getElementById("ModalSpace").textContent = espacio;
    document.getElementById("ModalTotal").textContent = total;

}

function closeModalBox(modal) {
    var b = $(`#${modal}`);
    b.css('display', 'none');

    var a = document.getElementsByClassName("uncheck");
    for (i = 0; i < a.length; i++) {
        a[i].checked = false
    }
}