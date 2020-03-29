import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Ela é uma linguagem fortemente tipada
  @Get()
  getHello(): {name: string}{
  //getHello(): string {
    return {name: 'Thiago Negreiros'};
    
    //return this.appService.getHello();
  }
}
