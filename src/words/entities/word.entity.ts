import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Language } from '../../languages/entities/language.entity';

@Entity()
export class Word {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  word: string;

  @Column()
  translation: string;

  @ManyToOne(() => Language, (language) => language.words, {
    onDelete: 'CASCADE',
  }) // Many word entities can have one language entity
  language: Language;
}
