import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PaymentsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.payment.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async create(input: { orderId: string; paymentMethod: string; amount: number; currency?: string; transactionRef?: string }) {
    return this.prisma.payment.create({
      data: {
        orderId: input.orderId,
        paymentMethod: input.paymentMethod,
        amount: input.amount,
        currency: input.currency ?? 'USD',
        transactionRef: input.transactionRef,
      },
    });
  }
}
