import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    const hash = await bcrypt.hash(data.password, 10);
    return this.prisma.user.create({
      data: { ...data, password: hash },
    });
  }

  async update(id: number, data: any) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }
}
