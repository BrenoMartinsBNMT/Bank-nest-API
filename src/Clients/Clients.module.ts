import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from './Clients.controller';
import { ClientsService } from './Clients.service';

import { ClientsEntity } from './DTO/Clients.entity';
import { ClientsRepository } from './Clients.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ClientsEntity, ClientsRepository])],
  controllers: [ClientsController],
  providers: [ClientsService, ClientsRepository, ClientsEntity],
})
export class ClientsModule {}
