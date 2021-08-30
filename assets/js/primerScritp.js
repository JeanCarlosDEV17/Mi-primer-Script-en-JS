const boton = document.getElementById("boton");
boton.addEventListener("click", preguntarNombre);
h1Nombre = document.getElementById("h1");

//Preguntar nombre al usuario
function preguntarNombre() {
   let nombreUsuario = prompt("¿Cual es tu nombre?");
   mostrarNombre(nombreUsuario);
}

//mostrar nombre
function mostrarNombre(nombreUsuario) {
   h1Nombre.textContent  ="Hola "+ nombreUsuario;
}
