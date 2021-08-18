import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('ev_webhook/new_event')
  @HttpCode(200)
  async login(@Body() data) {
    return this.appService.updateFile(data);
  }
}
