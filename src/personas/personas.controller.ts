import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import {PersonasService} from './personas.service';
import {Persona} from './persona.interface';
import {PersonaDto} from "./persona.dto"

@Controller('personas')
export class PersonasController {
    constructor(private readonly personasServ:PersonasService) {}
    @Get()
    getPersonas():Persona[] {
        // console.log(this.personasServ[0])
        return this.personasServ.getAll();
    }
    @Get(':id')
    getPersona(@Param('id') id):Persona {
        console.log(this.personasServ.getPersonaId(parseInt(id)));
        return this.personasServ.getPersonaId(parseInt(id));
    }
    @Post()
    creaPersona(@Body() pers: PersonaDto) {
        console.log(pers.nombre);
        return 'creada Persona!!!!!'
    }
    
}
