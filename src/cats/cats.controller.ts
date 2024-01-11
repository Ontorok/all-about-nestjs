import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseFilters,
} from '@nestjs/common';
import { CreateCatDto } from 'src/cats/dto/create.cat.dto';
import { HttpExceptionFilter } from 'utils/exceptionHandlers';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatsService) {}

  @Get()
  @UseFilters(new HttpExceptionFilter())
  async findAll(): Promise<Cat[]> {
    // return this.catService.findAll();
    throw new BadRequestException();
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
