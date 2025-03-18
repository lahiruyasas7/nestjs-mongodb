import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsString()
  @IsOptional()
  displayName?: string;
}
