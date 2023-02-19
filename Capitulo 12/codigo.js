class Persona {
	constructor(nombre,instagram){
		this.nombre = nombre;
		this.instagram = instagram;
	}
}

const data = [
	["Carlos","@Carlos"],
	["Neera","@Neera"],
	["Aylin","@Aylin"],
	["Eduardo","@Eduardo"],
];

const personas = [];

for (let i = 0; i < data.length; i++){
	personas[i] = new Persona(data[i][0],data[i][1]);
}

const obtenerPersona = (id)=>{
	return new Promise((resolve,reject)=>{
		if (personas[id] == undefined) reject ("No se ha encontrado la persona");
		else {resolve(personas[id])}
	});
}

const obtenerInstagram = (id)=>{
	return new Promise((resolve,reject)=>{
		if (personas[id].instagram == undefined) reject("No se ha encontrado el instagram");
		else {resolve(personas[id].instagram)}
	})
}

let id = 1;

obtenerPersona(id).then((persona)=>{
	console.log(persona.nombre);
	return obtenerInstagram(id);
	}).then((instagram)=>{
		console.log(instagram)
}).catch((e)=>{
	console.log(e);
	})




// class Persona {
// 	constructor(nombre,instagram){
// 		this.nombre = nombre;
// 		this.instagram = instagram;
// 	}
// }

// const data = [
// 	["Carlos","@Carlos"],
// 	["Neera","@Neera"],
// 	["Aylin","@Aylin"],
// 	["Eduardo","@Eduardo"],
// ];

// const personas = [];

// for (let i = 0; i < data.length; i++){
// 	personas[i] = new Persona(data[i][0],data[i][1]);
// }

// const obtenerPersona = (id,cb)=>{
// 	if (personas[id] == undefined) {
// 		cb("No se ha encontrado la persona");
// 	}else {
// 		cb(null,personas[id],id);
// 	}
// }

// const obtenerInstagram = (id,cb)=>{
// 	if (personas[id].instagram == undefined) {
// 		cb("No se ha encontrado el Instagram");
// 	}else {
// 		cb(null,personas[id].instagram);
// 	}
// }

// obtenerPersona(5,(err,persona,id) => {
// 	if (err) {
// 		console.log(err);
// 	}else {
// 		console.log(persona.nombre);
// 		obtenerInstagram(id,(err,instagram)=>{
// 			if(err) {
// 				console.log(err);
// 			} else {
// 				console.log(instagram)
// 			}
// 		});
// 	}
// })




