let botonRojo = document.getElementById("rojo");
let botonAzul = document.getElementById("azul");
let botonVerde = document.getElementById("verde");


botonRojo.addEventListener("click",function() {
    document.body.style.backgroundColor= "red";
});


botonAzul.addEventListener("click",function() {
 document.body.style.backgroundColor= "skyblue";
});


botonVerde.addEventListener("click",function() {
 document.body.style.backgroundColor= "lightgreen";
});