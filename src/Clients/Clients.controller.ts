import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientsService } from './Clients.service';
import { ClientsEntity } from './DTO/Clients.entity';

@Controller()
export class ClientsController {
  constructor(private clientsService: ClientsService) {}
  @Post('clients')
  async saveClient(@Body() body: ClientsEntity) {
    return this.clientsService.saveClient(body);
  }

  @Get('clients')
  async getClient() {
    console.log('teste');
    return 'teste';
  }
}
