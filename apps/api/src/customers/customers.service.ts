import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.customer.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    return this.prisma.customer.findUnique({
      where: { id },
    });
  }

  async create(input: { fullName: string; email?: string; phone?: string; passportNo?: string }) {
    return this.prisma.customer.create({
      data: {
        fullName: input.fullName,
        email: input.email,
        phone: input.phone,
        passportNo: input.passportNo,
      },
    });
  }
}
