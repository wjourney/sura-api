import { Controller, Post, Get, Body } from '@nestjs/common';
import { UserService } from 'src/feature/user/user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/user.dto';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signUp')
  @ApiOperation({ summary: '新增用户信息' })
  async create(@Body() createUserDto: CreateUserDto) {
    await this.userService.create(createUserDto);
  }
}
