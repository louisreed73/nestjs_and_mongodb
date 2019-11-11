import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import {Persona} from './persona.interface';
import { PersonaDto } from './persona.dto';

@Injectable()
export class PersonasService {
    constructor(@InjectModel('Persona') private personaModel: Model<Persona>) {}

    async getPersonas() {

        let array=await this.personaModel.find();
console.log(array.filter(pers=>pers.edad>41))

        return array
    }


    async getPersona(id:string) {
        return await this.personaModel.findById(id)
    }

    async deletePersona(id:string) {
        return await this.personaModel.deleteOne({_id:id})
    }
    async createPersona(pers:Persona) {
        let persona= new this.personaModel(pers);
        console.log("Persona Saved!!!")
        return await persona.save();
        
    }



}
