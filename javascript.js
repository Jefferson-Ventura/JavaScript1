let botonRojo = document.getElementByld("rojo");
let botonAzul = document.getElementByld("azul");
let botonVerde = document.getElementByld("verde");

botonRojo.addEventListener("click",function() {
    document.body.style.backgroundColor = "purple";
});

botonAzul.addEventListener("click",function() {
    document.body.style.backgroundColor = "yellow";
});

botonVerde.addEventListener("click",function() {
    document.body.style.backgroundColor = "black";
});