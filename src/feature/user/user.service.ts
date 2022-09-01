import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { User } from './entiies/user.entity';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  // 新增
  async create(createUserDto: CreateUserDto): Promise<void> {
    // 由于
    createUserDto.creator = 'admin';
    createUserDto.updater = 'admin';
    await this.usersRepository.save(createUserDto);
  }

  // // 根据id查询信息
  // async findOne(id: string): Promise<User> {
  //   return await this.usersRepository.findOne(id);
  // }

  // // 根据id或id和userName查询信息
  // async findByName(userName: string, id: string): Promise<User> {
  //   const condition = { userName: userName };
  //   if (id) {
  //     condition['id'] = Not(id);
  //   }
  //   return await this.usersRepository.findOne(condition);
  // }
}
