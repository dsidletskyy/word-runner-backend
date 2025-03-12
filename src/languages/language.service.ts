import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Language } from './entities/language.entity';

@Injectable()
export class LanguageService {
  constructor(
    @InjectRepository(Language)
    private languageRepository: Repository<Language>,
  ) {}

  findAll() {
    return this.languageRepository.find();
  }

  create(code: string, name: string) {
    const newLanguage = this.languageRepository.create({ code, name });
    return this.languageRepository.save(newLanguage);
  }
}
