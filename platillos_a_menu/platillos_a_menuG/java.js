var menu__phone = document.getElementById("menu__phone");
var imgA__header = document.getElementById("imgA__header");
var imgB__header = document.getElementById("imgB__header");
function mostrarMenu(){
    menu__phone.style.display = 'flex';
    imgA__header.style.display = 'none';
    imgB__header.style.display = 'flex';
}
function ocultarMenu(){
    menu__phone.style.display = 'none';
    imgB__header.style.display = 'none';
    imgA__header.style.display = 'flex';
}