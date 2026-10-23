import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CustomersService } from './customers.service';

class CreateCustomerDto {
  fullName: string;
  email?: string;
  phone?: string;
  passportNo?: string;
}

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateCustomerDto) {
    return this.customersService.create(body);
  }
}
