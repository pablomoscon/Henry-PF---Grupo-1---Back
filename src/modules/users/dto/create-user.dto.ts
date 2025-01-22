import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsDate, IsNotEmpty, IsEmail } from 'class-validator';
import { Role } from 'src/enums/roles.enum';

export class CreateUserDto {
    
    @ApiProperty({ description: 'Name of the user', example: 'John Williams' })
    @IsString({ message: 'The name must be a string.' })
    @IsNotEmpty({ message: 'The name cannot be empty.' })
    name: string;

    @ApiProperty({
        description: 'Email of the user',
        example: 'john.williams@mail.com',
    })
    @IsEmail({}, { message: 'The email must be a valid email address.' })
    @IsNotEmpty({ message: 'The email cannot be empty.' })
    email: string;

    @ApiProperty({
        description: 'Phone number of the user',
        example: '+5412345678 ',
    })
    @IsOptional()
    @IsString()
    phone?: string;

    @ApiProperty({
        description: 'Customer ID associated with the user in external systems',
        example: '123e4567-e89b-12d3-a456-426614174000',
    })
    @IsString()
    @IsOptional()
    customerId?: string;

    @ApiProperty({
        description: 'Address of the user',
        example: '123 Main St, Springfield',
    })
    @IsString()
    @IsOptional()
    address?: string;

    @ApiProperty({
        description: 'Role of the user',
        example: 'ADMIN',
        required: false,
    })
    @IsOptional()
    role?: Role;
}
