import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {PersonaSchema} from './persona.schema';
import { PersonasController } from './personas.controller';
import { PersonasService } from './personas.service';


@Module({
    imports: [MongooseModule.forRoot('mongodb://localhost/nest', { useNewUrlParser: true }),
    MongooseModule.forFeature([{ name: 'Persona', schema: PersonaSchema }])
],
    controllers:[PersonasController],
    providers:[PersonasService]
})
export class PersonasModule {}
