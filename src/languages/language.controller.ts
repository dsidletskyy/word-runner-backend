import { Body, Controller, Get, Post } from '@nestjs/common';
import { LanguageService } from './language.service';
import { AddLanguageDto } from './dto/create-language.dto';

@Controller('languages')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @Get()
  findAll() {
    return this.languageService.findAll();
  }

  @Post()
  addLanguage(@Body() addLanguageDto: AddLanguageDto) {
    return this.languageService.create(
      addLanguageDto.code,
      addLanguageDto.name,
    );
  }
}
