import { Controller, Get, Post, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';

class CreatePaymentDto {
  orderId: string;
  paymentMethod: string;
  amount: number;
  currency?: string;
  transactionRef?: string;
}

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get()
  findAll() {
    return this.paymentsService.findAll();
  }

  @Post()
  create(@Body() body: CreatePaymentDto) {
    return this.paymentsService.create(body);
  }
}
