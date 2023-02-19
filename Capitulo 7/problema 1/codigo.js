

let alto = window.screen.height;
let ancho = window.screen.width;

comprar = confirm(`El alto es: ${alto}, el Ancho es: ${ancho}`);

if (comprar) {
	alert ("compra realizada exitosamente");
}else{
	alert("compra cancelada");
}