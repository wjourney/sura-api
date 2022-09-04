import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserBody } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  // add user
  async create(createUserBody: CreateUserBody): Promise<CreateUserBody> {
    const userData = await this.usersRepository.save(createUserBody);
    return userData;
  }
}
