import {Document} from 'mongoose';

export class PersonaDto extends Document{
    nombre: string;
    edad: number;
    ciudad: string;
    profesion: string;
}