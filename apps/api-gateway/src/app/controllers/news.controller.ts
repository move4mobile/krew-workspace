import { Controller, Get } from '@nestjs/common';
import { NewsService } from '../core/services';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get('')
  async getAll() {
    return this.newsService.all();
  }
}
