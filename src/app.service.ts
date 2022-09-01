import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      errCode: 0,
      message: 'message',
      data: 'this is test',
    };
  }
  postTest(body) {
    return {
      errCode: 0,
      message: 'message',
      data: { ...body, ex: 'more feedback' },
    };
  }
}
