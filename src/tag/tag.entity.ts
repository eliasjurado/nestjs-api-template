import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tag' })
export class TagEntity {
  @PrimaryGeneratedColumn()
  id_tag: number;

  @Column({ nullable: false, type: 'text' })
  tx_name: string;
}
