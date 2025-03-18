import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/CreateUser.dto';
import mongoose from 'mongoose';
import { UpdateUserDto } from './dto/UpdateUser.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/create')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.creteUser(createUserDto);
  }

  @Get('/get')
  getUsers() {
    return this.userService.getUsers();
  }

  @Get('/get/:id')
  async getUserById(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      throw new HttpException('id not valid', 404);
    }
    const findUser = await this.userService.getUserById(id);
    if (!findUser) {
      throw new HttpException('user not found', 404);
    }
    return findUser;
  }

  @Patch('update/:id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      throw new HttpException('id not valid', 400);
    }
    const updatedUser = this.userService.updateUser(id, updateUserDto);

    if (!updatedUser) {
      throw new HttpException('User not found', 404);
    }
    return updatedUser;
  }

  @Delete('/delete/:id')
  async deleteUser(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) {
      throw new HttpException('id not valid', 400);
    }
    const deleteUser = await this.userService.deleteUser(id);
    if (!deleteUser) {
      throw new HttpException('User not found', 404);
    }
    return;
  }
}
