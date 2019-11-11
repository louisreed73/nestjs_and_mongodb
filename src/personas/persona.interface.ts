import {Document} from 'mongoose';

export interface Persona extends Document {
    nombre:string;
    edad:number;
    ciudad:string;
    profesion:string;
}
