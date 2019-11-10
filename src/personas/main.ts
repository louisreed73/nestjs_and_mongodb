import {NestFactory} from '@nestjs/core';

import {PersonasModule} from './personas.module';



async function bootstrap() {

    const app=await NestFactory.create(PersonasModule);

    await app.listen(3000);

};


bootstrap();