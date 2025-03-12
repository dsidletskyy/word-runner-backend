import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Word } from './entities/word.entity';

@Injectable()
export class WordsService {
  constructor(
    @InjectRepository(Word)
    private wordsRepository: Repository<Word>,
  ) {}

  addWord(word: string, translation: string, languageId: number) {
    const newWord = this.wordsRepository.create({
      word,
      translation,
      language: { id: languageId },
    });
    return this.wordsRepository.save(newWord);
  }

  getWordsByLanguage(languageId: number) {
    return this.wordsRepository.find({
      where: { language: { id: languageId } },
    });
  }

  getRandomWordsByLanguage(languageId: number) {
    // return this.wordsRepository
    //   .createQueryBuilder('word')
    //   .where('word.languageId = :languageId', { languageId })
    //   .orderBy('RANDOM()')
    //   .getMany();

    return this.wordsRepository.query(
      `SELECT * FROM "word" WHERE "languageId" = $1 ORDER BY RANDOM()`,
      [languageId],
    );
  }
}
