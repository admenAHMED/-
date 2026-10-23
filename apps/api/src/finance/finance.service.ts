import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FinanceService {
  constructor(private readonly prisma: PrismaService) {}

  async getOverview() {
    const [orders, payments, invoices, ledgerEntries] = await Promise.all([
      this.prisma.order.count(),
      this.prisma.payment.count(),
      this.prisma.invoice.count(),
      this.prisma.ledgerEntry.count(),
    ]);

    return {
      orders,
      payments,
      invoices,
      ledgerEntries,
      currency: 'USD',
    };
  }

  async createInvoice(input: { orderId: string; amount: number; currency?: string; status?: string }) {
    return this.prisma.invoice.create({
      data: {
        orderId: input.orderId,
        amount: input.amount,
        currency: input.currency ?? 'USD',
        status: input.status ?? 'DRAFT',
      },
    });
  }
}
