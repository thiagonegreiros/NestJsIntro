import { Module } from '@nestjs/common';

//Para instalar o Mongoose - npm install --save mongoose @nestjs/mongoose
//Importando o mongoose
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';

//Ele cria atutomaticamente o meu banco de dados nestjs-demo
@Module({
  imports: [ProductModule, MongooseModule.forRoot(
      'mongodb+srv://negreiros:negreiros@cluster0-3ekcc.mongodb.net/nestjs-demo?retryWrites=true&w=majority'
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
