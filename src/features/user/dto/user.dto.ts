import { ApiProperty } from '@nestjs/swagger'

export class CreateUserBody {
  @ApiProperty({ description: 'userName', example: 'Jack' })
  unitPrice: number

  @ApiProperty({ description: 'password' })
  password: string

  @ApiProperty({ description: 'gender 0:boy 1:girl' })
  gender: number

  @ApiProperty({ description: 'email' })
  email: string

  @ApiProperty({ description: 'phoneNumber' })
  mobile: string
}
