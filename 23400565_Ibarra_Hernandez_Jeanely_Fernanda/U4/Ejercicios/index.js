var nombre = "Jeanely";
console.log(nombre);
const edad = 20;
let promedio = 9.5;

if (true){
    var libro = "Libro 1";
    let animal= "perro";
    animal = 5;
    console.log(animal)
}

console.log(libro);
console.log(animal);


let n1 = parseInt(prompt("Ingresa un número"));
let n2 = number(prompt("Ingresa un número"));
console.log(n1);
console.log(n2);

let suma = n1+n2;
console.log(suma);

let suma = 10+5;
let resta = 10-5;
let multiplicacion = 10*5;
let division = 10/5;
let residuo = 10%3;

console.log("Suma:",suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Residuo:", residuo);

console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 3);
console.log(5 <= 3);
console.log(5 == "5");
console.log(5 != 3);

let calificacion = 85;
if(calificacion >= 90){
    console.log("Excelente");
} else if(calificacion >= 70){
    console.log("Aprobado");
}else{
    console.log("Reprobado");
}

let tabla = 5;
for(let i = 1; 1 <= 5; i++){
    console.log("Iteración: ", i);
    console.log(`${tabla} x ${i} = ${tabla * 1}`)
    console.log(tabla + " x " + i + " = "+ tabla * 1)
}

let contador = 1;
while (contador <= 5){
    console.log(contador);
    contador++;
}

function saludar(nombre){
    console.log("Hola "+nombre);
}

saludar("Jeanely");

function aleatorio(){
    let n = Math.floor(Math.random()*100+1);
    console.log(n);
}

aleatorio();

let numeros = [5,2];
console.log(numeros);
numeros.push(20);
console.log(numeros);
console.log(numeros[2]);


let persona = {
    nombre: "Jeanely",
    edad: 21,
    ciudad: "Tepic"
}

persona.nombre = "Luis";
persona.carrera = "ISC";
console.log(persona);

let numeros = [1,2,3,4,5];
numeros.forEach(numero => {
    console.log(numero);
});

let dobles = numeros.map(numero => {
    return numero*2;
});
console.log(dobles);

console.log(typeof (10));
console.log(typeof ("Hola"));
console.log(typeof (true));
console.log(typeof ({}));

const edad = 17;
const mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad" //comparacion sencilla
console.log(mensaje);

const estudiante = {
    nombre: "Pedro",
    direccion: {
        calle: "calle"
    }
}

console.log(estudiante.edad ?? "Sin edad") //cuando sea null

let nombre = "";
console.log(nombre || "Invitado") // compara los valores si ve que es nulo envia el otro

let edad = 25;    
edad >= 18 && console.log("Puede entrar");

let alumno = {
    nombre: "Juan",
    edad: 20,
    carrera: "ISC"

}

delete alumno.edad;
console.log(alumno);
console.log("nombre" in alumno);
console.log("edad" in alumno);

const numeros = [1, 2, 3];

const copia = [...numeros]
console.log(copia);

const a = [1,2];
const b = [3,4];
const c = [...a, ...b];

console.log(c);

const productos = [
{nombre: "Laptop", precio: 15000, categoria: "Electrónica"},
{nombre: "Celular", precio: 2900, categoria: "Electrónica"},
{nombre: "TV", precio: 6000, categoria: "Electrónica"},
{nombre: "Mortalika", precio: 28000, categoria: "Transporte"}
];

const caros = productos.filter(p => p.precio > 10000);
const nombres = productos.map(p => p.nombre);
const total = productos.reduce((suma, p) => {
    return suma + p.precio;
}, 0)

console.log(caros);
console.log(nombres);
console.log("Total: "+total)