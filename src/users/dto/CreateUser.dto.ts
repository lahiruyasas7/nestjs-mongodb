import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreateUserSettingDto {
  @IsOptional()
  @IsBoolean()
  receiveNotifications?: boolean;

  @IsOptional()
  @IsBoolean()
  receiveEmail?: boolean;

  @IsOptional()
  @IsBoolean()
  receiveSms?: boolean;
}

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsString()
  @IsOptional()
  displayName?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateUserSettingDto)
  settings?: CreateUserSettingDto;
}
