import { Repository } from 'typeorm';
import { ClientsEntity } from './DTO/Clients.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClientsRepository {
  constructor(
    @InjectRepository(ClientsEntity)
    private readonly repository: Repository<ClientsEntity>,
  ) {}

  async findAll(): Promise<ClientsEntity[]> {
    return this.repository.find();
  }
  async saveClient(data: ClientsEntity){
    return this.repository.save(data);
  }
  // Implement the repository methods here...
}
