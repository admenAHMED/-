import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';

class CreateOrderDto {
  customerId: string;
  orderNumber: string;
  subtotal: number;
  fee?: number;
  tax?: number;
  total: number;
  currency?: string;
}

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Post()
  create(@Body() body: CreateOrderDto) {
    return this.ordersService.create(body);
  }
}
