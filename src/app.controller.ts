import { Controller, Get, Render } from '@nestjs/common';
import * as mysql from 'mysql2';
import { AppService } from './app.service';

const conn = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'music_player'
}).promise();

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }
}
