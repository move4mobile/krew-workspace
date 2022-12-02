import { Controller, Get } from '@nestjs/common';
import { KrewApiService } from '../core/services';

@Controller('news')
export class NewsController {
  constructor(private readonly krewApiService: KrewApiService) {}

  @Get('')
  async getAll() {
    return this.krewApiService.getNews();
  }
}
