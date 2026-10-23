import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ServicesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.service.findMany({
      include: { provider: true },
    });
  }

  async findOne(id: string) {
    return this.prisma.service.findUnique({
      where: { id },
      include: { provider: true },
    });
  }

  async create(input: { providerId: string; type: string; name: string; code: string; basePrice: number; currency?: string }) {
    return this.prisma.service.create({
      data: {
        providerId: input.providerId,
        type: input.type,
        name: input.name,
        code: input.code,
        basePrice: input.basePrice,
        currency: input.currency ?? 'USD',
      },
    });
  }
}
