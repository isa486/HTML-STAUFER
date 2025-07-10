import mongoose from "mongoose";

const MantenimientoSchema = new mongoose.Schema({
  idMaquina: { type: String, required: true },
  fecha: String,
  trabajo: String,
  ubicacion: String,
  comentarios: String,
  realizo: String,
  recibio: String
  // Agrega aquí más campos si los necesitas
});

export default mongoose.model("Mantenimiento", MantenimientoSchema);
