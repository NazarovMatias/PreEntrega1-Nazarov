alert("Hola! No me esperaba que vieras esto asi");

let nombre = prompt("¿Cual es tu nombre?");
let apellido = prompt("¿Y tu apellido?");

if((nombre !="") && (apellido !="")){
    alert("Asi que te llamas " + nombre + " " + apellido);
}else{
    alert("Si no se tu nombre va a ser un poco dificil avanzar en esto");
};

let secciones = parseInt(prompt("Cuando se vaya este cartel veras un sitio web dividido en secciones, ¿Cuantas hay?"));

while(secciones != 5){
    alert("Claro, hay " + secciones);
    secciones = prompt("Intentalo de nuevo");
}

function solicitarIdea(idea1, idea2, idea3) {
    let idea = prompt("Que temas te gustaria que hable esta plantilla web");
    alert("Me gusta, ¿Me darias otra?")
}

solicitarIdea();
solicitarIdea();
solicitarIdea();

console.log("Mis favoritas fue " + idea1 + " y " + idea3);

