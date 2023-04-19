
const prueba = (req,res)=>{
    return res.status(200).json({
        mensaje:"soy una accion de prueba en mi controlador de articulos"
    });
}

module.exports = {
    prueba
}