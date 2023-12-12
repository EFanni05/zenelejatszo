import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import * as mysql from 'mysql2';

const conn = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'music_player'
}).promise();

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render('index')
  index() {
    return { title: 'Music player' }
  }

  @Get('/list')
  @Render('list')
  async list() {
    const [adatok, mezok] = await conn.execute('SELECT title, artist FROM songs')
    return { songs: adatok };
  }
}
