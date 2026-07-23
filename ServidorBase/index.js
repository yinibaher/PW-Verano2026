const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const PORT =  3000;

app.get("/",(req,res) =>{
    res.send("Bienvenido a mi primer servidor");
});

app.get("/pagina",(req,res) =>{
    res.send(`
        <style>
            h1{
                color:red;
            }
        </style>
        <h1>Mi página</h1>
        <p>Creada con Express</p>
    `);
});


app.get("/saludo/:nombre",(req,res) => {
    const nombre = req.params.nombre;
    res.send("Hola "+nombre);
});

//Ejercicio 1
app.get("/par/:numero",(req,res) => {
    let numero = req.params.numero;

    if(numero%2==0){
        res.send(numero+" es un número par.");
    }else{
        res.send(numero+" es un número impar.");
    }  
});

//Ejercicio 2
app.get("/edad/:edad",(req,res) => {
    let edad = req.params.edad;
    if(edad>=18){
        res.send("Eres mayor de edad.");
    }else{
        res.send("Eres menor de edad.");
    } 
});

//Ejercicio 3
app.get("/calculadora/:operacion/:a/:b",(req,res) => {
    let operacion = req.params.operacion;
    let a = Number(req.params.a);
    let b = Number(req.params.b);

    switch(operacion){
        case "suma": res.send("Resultado: "+(a+b));
            break;
        case "resta": res.send("Resultado: "+(a-b));
            break;
        case "multiplicacion": res.send("Resultado: "+(a*b));
            break;
        case "division": res.send("Resultado: "+(a/b));
            break;
    };
});

//Ejercicio 4
app.get("/tabla/:numero",(req,res) => {
    let numero = req.params.numero;
    let tabla = "";

    for(let i=1;i<=10;i++){
        tabla += numero+" x "+i+" = "+(i*numero)+`<br>`;
    }
    res.send(tabla);
});

//Ejercicio 5
app.get("/calificacion/:nota",(req,res) => {
    let nota = req.params.nota;

    if(nota<70){
        res.send("Reprobado");
    }else if(nota<80){
        res.send("Aprobado");
    }else if(nota<90){
        res.send("Muy bien");
    }else{
        res.send("Excelente");
    }         
});

app.listen(PORT,() => {
    console.log("Servidor iniciado en http://localhost:"+PORT);
});

// Clase 22 de Julio
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

let peliculas = [{
    id:1,
    titulo: "Interestelar",
    director:"Christopher Nolan",
    año: 2014
},
{
    id:2,
    titulo:"Zootopia",
    director:"Rich Moore",
    año:2015
}];

let idActual = peliculas.length+1;

//Obtener todas las películas
app.get("/peliculas",(req,res) => {
    res.json(peliculas);
});

//Obtener una película por ID
app.get("/peliculas",(req,res) => {
    const id= Number(req.params.id);
    const pelicula = pelicula.find(pelicula=>pelicula.id === id);

    if (!pelicula){
        return res.status(404).json({
            mensaje:"Pelicula no encontrada"
        });
    }
    res.json(pelicula);
});

app.post("/peliculas", (req,res) => {
    const{titulo, director, año} = req.body;
    if(!titulo || !director || !año){
        return res.status(404).json({
            mensaje: "Datos faltantes de la película"
        });
    }

    const nuevaPelicula = {
        id: idActual++,
        titulo: titulo,
        director: director,
        año: Number(año)
    };

    peliculas.push(nuevaPelicula);
    res.status(201).json ({
        mensaje: "Pelicula registrada correctamente",
        pelicula: nuevaPelicula
    });
});

//Actualizar una película
app.put("/peliculas/:id", (req,res) => {
    const id = Number(req.params.id);
    const{titulo, director, año} = req.body;
    
    if(!titulo || !director || !año){
        return res.status(404).json({
            mensaje:"Datos faltantes de la película"
        })
    }
    const indice = peliculas.findIndex(
        pelicula => pelicula.id === id
    );

    if(indice = -1){
        return res.status(404).json({
            mensaje: "Pelicula no encontrada"
        });
    }

    peliculas[indice] = {
        id: idActual++,
        titulo: titulo,
        director: director,
        año: Number(año)
    };

    res.json({
        mensaje:"Película actualizada correctamente",
        pelicula: peliculas[indice]
    });
});

//Eliminar una película
app.put("/peliculas/:id", (req,res) => {
    const id = Number(req.params.id);
    const indice = peliculas.findIndex(
        pelicula => pelicula.id === id
    );

    if(indice = -1){
        return res.status(404).json({
            mensaje: "Pelicula no encontrada"
        });
    }

    const peliculaEliminada = peliculas[indice];
    peliculas.splice(indice,1);

    res.json({
        mensaje:"Película eliminada correctamente",
        pelicula: peliculaEliminada
    });
});

