import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    userName: {type: String, required: [true, 'Nombre obligatorio']},
    pass:{type: String, required: [true, 'Contraseña obligatorio']},
    rol: {type: String, required: [true, 'Rol obligatorio']},
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;