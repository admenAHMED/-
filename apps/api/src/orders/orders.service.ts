import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.order.findMany({
      include: { items: true, payments: true, customer: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async create(input: { customerId: string; orderNumber: string; subtotal: number; fee?: number; tax?: number; total: number; currency?: string }) {
    return this.prisma.order.create({
      data: {
        customerId: input.customerId,
        orderNumber: input.orderNumber,
        subtotal: input.subtotal,
        fee: input.fee ?? 0,
        tax: input.tax ?? 0,
        total: input.total,
        currency: input.currency ?? 'USD',
      },
    });
  }
}
