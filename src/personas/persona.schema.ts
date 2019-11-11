import {Schema}  from 'mongoose';

export const PersonaSchema = new Schema({
  nombre: String,
  edad: Number,
  ciudad: String,
  profesion: String,
});