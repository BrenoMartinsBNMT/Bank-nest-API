import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ClientsRepository } from './Clients.repository';
import { ClientsEntity } from './DTO/Clients.entity';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

@Injectable()
export class ClientsService {
  constructor(
    private clientRepository: ClientsRepository,
    private clientEntity: ClientsEntity,
  ) {}
  async getClients() {
    return this.clientRepository.findAll();
  }
  async saveClient(clientData: ClientsEntity) {
    try {
      const entity = this.getDtoClient(clientData);
      await this.clientRepository.saveClient(entity);
      return HttpStatus.CREATED.toString();
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Error saving client',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  //aux functions
  getDtoClient(clientData: ClientsEntity) {
    const entity = new ClientsEntity();
    dayjs.extend(customParseFormat);

    entity.account_number = clientData.account_number;
    entity.name = clientData.name;
    entity.birthday = clientData.birthday;
    entity.balance = clientData.balance;
    entity.cpf = clientData.cpf;
    entity.password = clientData.password;
    entity.generateAccountNumber();
    entity.validateDateBirthday();

    return entity;
  }
}
