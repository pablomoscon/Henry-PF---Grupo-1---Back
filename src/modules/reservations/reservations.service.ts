import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, LessThan, LessThanOrEqual, MoreThan, MoreThanOrEqual, Repository } from 'typeorm';
import { Reservation } from 'src/modules/reservations/entities/reservation.entity';
import { CreateReservationDto } from 'src/modules/reservations/dto/create-reservation.dto';
import { UsersService } from '../users/users.service';
import { RoomsService } from '../rooms/rooms.service';
import { CatsService } from '../cats/cats.service';
import { ReservationStatus } from 'src/enums/reservation-status.enum';
import { Cat } from '../cats/entities/cat.entity';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,
    private readonly usersService: UsersService,
    private readonly roomsService: RoomsService,
    private readonly catsService: CatsService,
  ) { }

  async create(createReservationDto: CreateReservationDto): Promise<Reservation> {
    const { userId, roomId, catsIds, checkInDate, checkOutDate, totalAmount } = createReservationDto;

    const isUsersCat = await Promise.all(catsIds.map(cat => this.catsService.isCatOwnedByUser(cat, userId)));
    if (isUsersCat.some(isOwned => isOwned === false)) {
      throw new BadRequestException('One or more cats are not owned by the user');
    };

    const isRoomAvailable = await this.isRoomAvailable(roomId, checkInDate, checkOutDate);

    if (!isRoomAvailable) {
      throw new BadRequestException("The room is not available for the selected dates");
    };

    const user = await this.usersService.findOne(userId)
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const room = await this.roomsService.findOne(roomId)
    if (!room) {
      throw new NotFoundException('Room not found');
    }
    const cats: Cat[] = [];

    for (const catId of catsIds) {
      const cat = await this.catsService.findOne(catId);
      if (!cat) {
        throw new NotFoundException(`Cat with ID ${catId} not found`);
      } else {
        cats.push(cat);
      }
    };

    const reservation: Reservation = await this.reservationRepository.create({
      user,
      cats,
      room,
      checkInDate,
      checkOutDate,
      totalAmount,
      status: ReservationStatus.PENDING,
    });

    await this.reservationRepository.save(reservation)

    return reservation;
  };


  private async isRoomAvailable(roomId: string, checkInDate: Date, checkOutDate: Date): Promise<boolean> {
    const conflictingReservations = await this.reservationRepository.find({
      where: {
        room: { id: roomId },
        checkInDate: LessThanOrEqual(checkOutDate),
        checkOutDate: MoreThanOrEqual(checkInDate),
      },
    });

    return conflictingReservations.length === 0;
  };

  async findAll(): Promise<Reservation[]> {
    return await this.reservationRepository.find({
      where: { deleted_at: IsNull() },
      relations: ['user', 'room', 'cats'],
    });
  };

  async unavailableRooms(roomId: string, checkInDate: Date, checkOutDate: Date) {
    const unavailableRooms = await this.reservationRepository.find({
      where: {
        room: { id: roomId },
        checkInDate: LessThan(checkOutDate),
        checkOutDate: MoreThan(checkInDate),
      },
    });
    return unavailableRooms;
  };

  async findOne(id: string): Promise<Reservation> {
    const reservation = await this.reservationRepository.findOne({
      where: { id },
      relations: ['user', 'room', 'cats'],
    });

    if (!reservation) {
      throw new NotFoundException(`Reservation with ID ${id} not found`);
    }
    return reservation;
  }

  async update(id: string, updateUserDto: UpdateReservationDto) {
    await this.reservationRepository.update(id, updateUserDto);
    return this.findOne(id);
  };

  async remove(id: string): Promise<Reservation> {
    const reservation = await this.reservationRepository.findOne({ where: { id } });

    if (!reservation) {
      throw new NotFoundException(`Reservation with ID ${id} not found`);
    }
    reservation.deleted_at = new Date();
    return this.reservationRepository.save(reservation);
  };
}