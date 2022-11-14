import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SubastaSchema = new Schema({
    nameProducto: {type: String, required: [true, 'Nombre obligatorio']},
    estado:{type: Object},
    montoInicial:{type: Object, required: [true, 'MontoInicial obligatorio']},
    montoFinal: {type: Object, required: [true, 'MontoFinal obligatorio']},
    tiempo:{type: Object, required: [true, 'Tiempo obligatorio']},
});

const Subasta = mongoose.model('Subasta', SubastaSchema);

export default Subasta;