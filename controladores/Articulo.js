const validator = require("validator")
const prueba = (req,res)=>{
    return res.status(200).json({
        mensaje:"soy una accion de prueba en mi controlador de articulos"
    });
}

const curso = (req,res)=>{

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
    },
    ]);

};

const crear = (req, res)=>{

    // Recoger paraetros para post a guardar
    let parametros= req.body;

    // validar datos
    try{

        let validar_titulo = !validator.isEmpty(parametros.titulo) &&
                              validator.isLength(parametros.titulo,{min:5,max:undefined});
        let validar_contenido = !validator.isEmpty(parametros.contenido);

        if(! validar_titulo || ! validar_contenido){
            throw new Error("No se ha validado la informacion !!");
        }
    }catch(error){

        return res.status(400).json({
            status:"error",
            mensaje: "Falan datos por enviar"
           
        })

    }

    // crear el objeto a guardar 

    // Asignar valores a objeto basado en el modelo (manual o autoamatico)

    // Guardar el articulo en la base de datos

    // Devolver resultado

    return res.status(200).json({
        mensaje: "Accion de guardar",
        parametros
    })
}


module.exports = {
    prueba,
    curso,
    crear
}