const {conexion} = require("./basedatos/conexion");
const express = require("express");
const cors = require("cors");
//Inicializar app
console.log("App de node arrancada");

//conectar a la base de datos 
conexion();

// crear servidord node
const app = express();
const puerto=3900;
//configurar el cors
app.use(cors());

//converir body en objeto JS
app.use(express.json());

//crear rutas
app.get("/probando",(req,res)=>{

    console.log("se ha ejecutado elenpoint probando ");

    return res.status(200).json([{
        curso:"master en React",
        autor:"victor robles WEB",
        url:"victorrobleswe.es/master-react"
    },
    {
        curso:"React Nite",
        autor:"victor robles WEB",
        url:"victorrobleswe.es/master-react"
    }]);

});

app.get("/",(req,res)=>{

    console.log("se ha ejecutado elenpoint Inicio ");

    return res.status(200).send(`
        <h1>Empezando a crear un api rest con node</h1>    
    `);
    
});

//crear servidir y escuchas peticiones HTTP
app.listen(puerto,()=>{
    console.log("servidor corriendo en el puerto"+ puerto);
})