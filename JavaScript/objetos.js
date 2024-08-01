//obejtos en js

// let persona = { //esto es un objeto
//     nombre: "Sara",
//     edad: 34,
//     ciudad: "Fuente Alvilla"
// }
// const colegas = [ // esto es un array con objetos en su interior
//     {nombre: "Peche", edad: 30, ciudad: "Madrid"},
//     {nombre: "Alaminos", edad: 30, ciudad: "Guejar Sierra"},
//     {nombre: "Simón", edad: 30, ciudad: "Cordoba"},
//     {nombre: "Rodri", edad: 30, ciudad: "Lancha del Genil"},
// ]


// generador de frases

function generar() {
    let citas = [
        {cita: "Dios ha muerto", autor: "Friedrich Nietzsche"},
        {cita: "Fuera de la sociedad, el hombre es una bestia o un dios", autor: "Aristoteles"},
        {cita: "La duda es el origen de la sabiduría", autor: "Rene Descartes"},
        {cita: "No es lo que te ocurre, sino cómo reaccionas, eso es lo que importa", autor: "Epicteto"},
        {cita: "El hombre es un lobo para el hombre", autor: "Thomas Hobbes"},
        {cita: "Siempre que enseñes, enseña a la vez a dudar de lo que enseñas", autor: "Jose Ortega y Gasset"},
        {cita: "La felicidad del cuerpo se funda en la salud; la del entendimiento, en el saber", autor: "Tales de Mileto"},
        {cita: "Errar es cosa de cualquier hombre, pero perseverar en el error solo es privativo de los necios", autor: "Cicerón"}
    ]
    let aleatorio = Math.random()*citas.length;
    aleatorio = Math.floor(aleatorio);
    document.getElementById("texto").textContent = citas[aleatorio].cita;
    document.getElementById("autor").textContent = citas[aleatorio].autor;
}
