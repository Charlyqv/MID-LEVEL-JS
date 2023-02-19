alumnos = [{
	nombre: "Carlos Villaseñor",
	email: "charlyqv98@gmail.com",
	materia: "Fisica 3"
},{
	nombre: "Eduardo Villaseñor",
	email: "eduardqv01@gmail.com",
	materia: "Fisica 1"
},{
	nombre: "Aylin Villaseñor",
	email: "yinaqqv97@gmail.com",
	materia: "Fisica 2"
},{
	nombre: "Neera Quintero",
	email: "quinbra@gmail.com",
	materia: "Recreo"
}];

const boton = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container");


for (alumno in alumnos){
	let datos = alumnos[alumno];
	let nombre = datos["nombre"];
	let email = datos["email"];
	let materia = datos["materia"];
	let htmlCode = `
	<div class ="grid-item nombre">${nombre}</div>
		<div class ="grid-item email">${email}</div>
		<div class ="grid-item materia">${materia}</div>
		<div class ="grid-item semana">
			<select class="semana-elegida">
				<option value="Semana 1">Semana 1</option>
				<option value="Semana 2">Semana 2</option>
			</select>
		</div>`
		contenedor.innerHTML+= htmlCode;
}

boton.addEventListener("click", ()=>{
	let confirmar = confirm ("¿realmente quieres confirmar las mesas?");
	if (confirmar) {
		document.body.removeChild(boton);
		let elementos = document.querySelectorAll(".semana");
		let semanasElegidas = document.querySelectorAll(".semana-elegida");
		for (elemento in elementos){
			semana = elementos[elemento];
			semana.innerHTML = semanasElegidas[elemento].value;
	}
	}
})