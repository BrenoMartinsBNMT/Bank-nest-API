import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ClientsEntity } from '../Clients/DTO/Clients.entity';
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class TransactionsEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @OneToOne(() => ClientsEntity, (client) => client.id)
  @JoinColumn()
  protractor: ClientsEntity;
  @ApiProperty()
  @OneToOne(() => ClientsEntity, (client) => client.id)
  @JoinColumn()
  receiver: ClientsEntity;
  @ApiProperty()
  @Column()
  value: number;
  @ApiProperty()
  @Column({ type: 'timestamp' })
  data: Date;
  @ApiProperty()
  @Column()
  deleted_at: Date;
}
