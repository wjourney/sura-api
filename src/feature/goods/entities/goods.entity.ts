import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('goods')
export class Goods {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  unitPrice: number;

  @Column()
  quantity: number;
}
