import { Socket, Server } from 'socket.io';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { UsersService } from '../users/users.service';
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { ReservationsService } from '../reservations/reservations.service';

@WebSocketGateway({ cors: { origin: '*' }, namespace: 'messages/chat' })
export class MessagesGateway {
    @WebSocketServer()
    server: Server;

    constructor(
        @InjectRepository(Message)
        private messageRepository: Repository<Message>,
        private readonly usersService: UsersService,
        private readonly reservationsService: ReservationsService
    ) { }

    @SubscribeMessage('joinRoom')
    async handleJoinRoom(
        @MessageBody() { userId, reservationId }: { userId: string, reservationId: string },
        @ConnectedSocket() socket: Socket
    ) {
        const reservation = await this.reservationsService.findOne(reservationId);

        if (reservation) {
            socket.join(reservationId);
            console.log(`User ${userId} joined room ${reservationId}`);
        }
    }

    @SubscribeMessage('send_message')
    async handleSendMessage(
        @MessageBody() createMessageDto: CreateMessageDto,
        @ConnectedSocket() socket: Socket
    ) {
        const sender = await this.usersService.findOne(createMessageDto.sender);
        const receiver = await this.usersService.findOne(createMessageDto.receiver);

        const newMessage = this.messageRepository.create({
            ...createMessageDto,
            sender,
            receiver,
            timestamp: new Date(),
        });

        await this.messageRepository.save(newMessage);

        socket.to(createMessageDto.reservationId).emit('receive_message', newMessage);
    }

    @SubscribeMessage('connect')
    handleConnection(socket: Socket) {
        console.log('Client connected:', socket.id);
    }

    @SubscribeMessage('disconnect')
    handleDisconnect(socket: Socket) {
        console.log('Client disconnected:', socket.id);
    }
}