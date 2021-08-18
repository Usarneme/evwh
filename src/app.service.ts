import { Injectable } from '@nestjs/common';
import fs from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  updateFile(body: string): string {
    try {
      fs.writeFile('./log.txt', body, (e) => {
        if (e) throw e;
      });
    } catch (err) {
      console.log(err);
    }
    return 'ok';
  }
}
