const {Schema, model}=require("mongoose");

//estructura la cual tendra mi base de datos
const ArticuloSchema = Schema({
        titulo:{
            type: String,
            required: true
        },
        contenido:{
            type:String,
            required:true
        },
        fecha:{
            type:Date,
            default: Date.now
        },
        imagen:{
            type: String,
            default:"default.png"
        }


});

// conectar a la base de datos articulos ya se puede crear ariculosy quedan guardados en la DB
module.exports = model("Articulo", ArticuloSchema,"articulos");
