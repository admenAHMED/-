import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ServicesService } from './services.service';

class CreateServiceDto {
  providerId: string;
  type: string;
  name: string;
  code: string;
  basePrice: number;
  currency?: string;
}

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  findAll() {
    return this.servicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicesService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateServiceDto) {
    return this.servicesService.create(body);
  }
}
