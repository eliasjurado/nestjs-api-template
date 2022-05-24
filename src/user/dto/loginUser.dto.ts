import { IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  readonly tx_email: string;

  @IsNotEmpty()
  readonly tx_pass: string;
}
