import { Injectable } from '@nestjs/common';
import { Persona} from './persona.interface';
import { tsImportEqualsDeclaration } from '@babel/types';

@Injectable()
export class PersonasService {
    personas: Persona[]=[
        {
            id:1,
            nombre:"Ana",
            edad:39,
            ciudad:"Madrid",
            profesion:"Enseñanza"
        },
        {
            id:2,
            nombre:"Monica",
            edad:47,
            ciudad:"Toledo",
            profesion:"Desconocido"
        },
        {
            id:3,
            nombre:"Luis",
            edad:46,
            ciudad:"Madrid",
            profesion:"Web Developper"
        },
        {
            id:4,
            nombre: "Julian",
            edad: 44,
            ciudad: "Madrid",
            profesion: "IT Sistemas"
        }
    ];
    getAll():Persona[] {
        return this.personas
    };
    getPersonaId(id:number):Persona {
        return this.personas.find(persona=>persona.id===id)
    }
    setPersona(pers:Persona) {
        this.personas.push(pers)
    }

}
