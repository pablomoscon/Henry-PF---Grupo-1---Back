import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsOptional, IsDate } from 'class-validator';
import { Credential } from '../../credentials/entities/credential.entity';
import { Cat } from '../../cats/entities/cat.entity';
import { Caretaker } from '../../caretakers/entities/caretaker.entity';
import { Reservation } from '../../reservations/entities/reservation.entity';
import { ChatHistory } from '../../chat-history/entities/chat-history.entity';
import { Role } from 'src/enums/roles.enum';
import { Status } from 'src/enums/status.enum';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({
    description: 'Unique identifier for the user',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  id: string;

  @Column({ type: 'varchar', length: 25 })
  @ApiProperty({ description: 'Name of the user', example: 'John Williams' })
  @IsString()
  name: string;

  @Column({ type: 'varchar' })
  @ApiProperty({
    description: 'Email of the user',
    example: 'john.williams@mail.com',
  })
  @IsString()
  email: string;

  @Column({ nullable: true })
  @ApiProperty({
    description: 'Customer ID associated with the user in external systems',
    example: '29309649',
  })
  @IsString()
  @IsOptional()
  customerId: string;


  @Column({ type: 'varchar', length: 20, nullable: true })
  @ApiProperty({
    description: 'Phone number of the user',
    example: '+5412345678 ',
  })
  @IsString()
  @IsOptional()
  phone: string;
  
  @Column({ type: 'timestamp', nullable: true })
  @ApiProperty({
    description: 'Timestamp when the user was deleted',
    example: '2025-01-10T00:00:00.000Z',
  })
  @IsOptional()
  deleted_at?: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @ApiProperty({
    description: 'Address of the user',
    example: '123 Main St, Springfield',
  })
  @IsString()
  @IsOptional()
  address: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  @ApiProperty({
    description: 'Role of the user',
    example: 'USER',
  })
  role: Role;

  @Column({ type: 'enum', enum: Status, default: Status.ACTIVE })
  @ApiProperty({
    description: 'Status of the user',
    example: 'ACTIVE',
  })
  status: Status;

  @OneToOne(() => Credential)
  @ApiProperty({
    description: 'Credential associated with the user',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @JoinColumn()
  credential: Credential;

  @OneToMany(() => Cat, (cat) => cat.user)
  cats: Cat[];

  @OneToMany(() => Caretaker, (caretaker) => caretaker.user)
  caretakers: Caretaker[];

  @OneToMany(() => Reservation, (reservation) => reservation.user)
  reservations: Reservation[];

  @OneToMany(() => ChatHistory, (chatHistory) => chatHistory.sender)
  sentMessages: ChatHistory[];

  @OneToMany(() => ChatHistory, (chatHistory) => chatHistory.receiver)
  receivedMessages: ChatHistory[];
}