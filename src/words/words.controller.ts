import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { WordsService } from './words.service';
import { AddWordDto } from './dto/add-word.dto';

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Post()
  addWord(@Body() addWordDto: AddWordDto) {
    return this.wordsService.addWord(
      addWordDto.word,
      addWordDto.translation,
      addWordDto.languageId,
    );
  }

  @Get(':languageId')
  findAll(@Param('languageId') languageId: number) {
    return this.wordsService.getWordsByLanguage(languageId);
  }

  @Get('random/:languageId')
  getRandomWords(@Param('languageId', ParseIntPipe) languageId: number) {
    return this.wordsService.getRandomWordsByLanguage(languageId);
  }
}
