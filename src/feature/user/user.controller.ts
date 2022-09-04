import { Controller, Post, Get, Body } from '@nestjs/common';
import { UserService } from 'src/feature/user/user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserBody } from './dto/user.dto';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signUp')
  @ApiOperation({ summary: 'add user' })
  async create(@Body() createUserBody: CreateUserBody) {
    const userData = await this.userService.create(createUserBody);
    return userData;
  }
}
