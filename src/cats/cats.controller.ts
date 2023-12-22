import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCatDto } from 'src/cats/dto/create.cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: { id: string }): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  @Post()
  create(@Body() cat: CreateCatDto) {
    return this.catService.create(cat);
  }
}
