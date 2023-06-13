import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Generated,
  BeforeInsert,
  OneToOne,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid';
import * as faker from 'faker';
import { format } from 'date-fns';
import { TransactionsEntity } from '../../Transactions/Transactions.entity';
import { IsDate, IsDateString, IsISO8601, IsString } from 'class-validator';
import dayjs from 'dayjs';

@Entity()
export class ClientsEntity {
  @ApiProperty({
    type: 'string',
    format: 'uuid',
    example: uuidv4(),
    readOnly: true,
  })
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  @OneToOne(() => TransactionsEntity, (transaction) => transaction.id)
  id: number;

  @ApiProperty({ readOnly: true })
  @Column({ default: '001', nullable: false })
  financial_institution: string;

  @ApiProperty({ readOnly: true })
  @Column({ nullable: false })
  account_number: string;

  @ApiProperty()
  @Column({ nullable: false })
  @IsString()
  cpf: string;

  @ApiProperty()
  @Column({ nullable: false })
  @IsString()
  password: string;

  @ApiProperty()
  @Column({ nullable: false })
  @IsString()
  name: string;

  @ApiProperty()
  @Column({ nullable: false })
  birthday: string;

  @ApiProperty({ readOnly: true })
  @Column({ nullable: false, default: 0 })
  balance: number;

  @ApiProperty({ readOnly: true })
  @Column({ nullable: false })
  account_created_at: string;

  @ApiProperty({ readOnly: true })
  @Column({ nullable: true })
  account_updated_at: string;

  @ApiProperty({ readOnly: true })
  @Column({ nullable: true })
  account_deleted_at: string;

  constructor() {
    const currentDate = new Date();
    this.account_created_at = currentDate.toISOString();
  }
  @BeforeInsert()
  public generateAccountNumber() {
    this.account_number = faker.finance.account();
  }
  public validateDateBirthday() {
    dayjs(this.birthday, 'YYYY-MM-DD', true).isValid();
  }
}
