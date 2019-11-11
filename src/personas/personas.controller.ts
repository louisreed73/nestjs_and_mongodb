import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import {PersonasService} from './personas.service';
import {Persona} from './persona.interface';
import {PersonaDto} from "./persona.dto"

@Controller('personas')
export class PersonasController {
    constructor(private readonly personasServ:PersonasService) {}
    @Get()
    getPers():Promise<Persona[]> {
        // console.log(this.personasServ[0])
        return this.personasServ.getPersonas();
    }
    @Get(':id')
    getPersona(@Param('id') id) {
        // console.log(this.personasServ.getPersonaId(parseInt(id)));
        return this.personasServ.getPersona(id);
    }
    @Post()
    creaPersona(@Body() pers: Persona): Promise<Persona> {
        // console.log(pers.nombre);
        return this.personasServ.createPersona(pers)
    }
    
}
