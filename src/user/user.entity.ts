import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { hash } from 'bcrypt';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id_user: number;
  @Column({ default: '' })
  tx_name: string;
  @Column({ default: '' })
  tx_name_alter: string;
  @Column()
  tx_email: string;
  @Column({ default: '' })
  tx_bio: string;
  @Column({ default: '' })
  tx_img: string;
  @Column()
  tx_user: string;
  @Column({ select: false })
  tx_pass: string;

  @BeforeInsert()
  async hashPassword() {
    this.tx_pass = await hash(this.tx_pass, 10);
  }
}
