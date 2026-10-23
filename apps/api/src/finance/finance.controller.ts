import { Controller, Get, Post, Body } from '@nestjs/common';
import { FinanceService } from './finance.service';

class CreateInvoiceDto {
  orderId: string;
  amount: number;
  currency?: string;
  status?: string;
}

@Controller('finance')
export class FinanceController {
  constructor(private readonly financeService: FinanceService) {}

  @Get('overview')
  getOverview() {
    return this.financeService.getOverview();
  }

  @Post('invoices')
  createInvoice(@Body() body: CreateInvoiceDto) {
    return this.financeService.createInvoice(body);
  }
}
