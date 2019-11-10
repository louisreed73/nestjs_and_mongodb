import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonasController } from './personas.controller';
import { PersonasService } from './personas.service';


@Module({
    imports: [MongooseModule.forRoot('mongodb://localhost/nest', { useNewUrlParser: true })],
    controllers:[PersonasController],
    providers:[PersonasService]
})
export class PersonasModule {}
