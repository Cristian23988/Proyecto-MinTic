const mongoose= require('mongoose');
//modelo
const producto=mongoose.Schema({
    nombre_producto:{type: String, required: true},
    precio_unitario:{type: Number, required: true},
    cantidad_producto:{type: Number, required: true},
    descripcion:{type:String, required: true}, 
    disponible:{type:Boolean, required: true}

})
//exportamos el modelo
module.exports=mongoose.model("products", producto);