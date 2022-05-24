import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  readonly tx_name: string;

  @IsNotEmpty()
  readonly tx_user: string;

  @IsNotEmpty()
  @IsEmail()
  readonly tx_email: string;

  @IsNotEmpty()
  readonly tx_pass: string;
}
