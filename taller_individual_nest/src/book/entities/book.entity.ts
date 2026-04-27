import { User } from '../../user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column({ type: 'float', default: 0 })
  price: number;

  @Column({ default: false })
  isSold: boolean;

  @ManyToOne(() => User, (user) => user.books, { nullable: true, eager: true })
  user?: User | null;
}
