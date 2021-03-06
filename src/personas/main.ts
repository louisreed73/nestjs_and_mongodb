import {NestFactory} from '@nestjs/core';

import {PersonasModule} from './personas.module';



async function bootstrap() {

    const app=await NestFactory.create(PersonasModule);
    app.enableCors();

    await app.listen(3000);

};


bootstrap();