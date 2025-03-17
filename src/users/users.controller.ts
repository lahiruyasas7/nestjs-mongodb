import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/CreateUser.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/create')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.creteUser(createUserDto);
  }
}
