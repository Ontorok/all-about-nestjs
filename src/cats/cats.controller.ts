/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { CreateCatDto } from 'src/cats/dto/create.cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    throw new ForbiddenException();
  }

  @Get(':id')
  findOne(@Param() params: { id: string }): string {
    throw new ForbiddenException();
  }

  @Post()
  create(@Body() cat: CreateCatDto) {
    return this.catService.create(cat);
  }
}
