import { Room } from '../../modules/rooms/entities/room.entity';
import { RoomFeatures } from '../../enums/rooms-features.enum';

export const roomsMock: Room[] = [
  {
    id: '123e4567-e89b-12d3-a456-426614174000',
    name: '5 star Suite',
    description:
      'A cozy and luxurious suite with a hiding place, hammocks, scratchers, and suspension bridges to keep your cat entertained all day long.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427710/room_7_slcqfi.jpg',
    features: [
      RoomFeatures.hidingPlace,
      RoomFeatures.hammocks,
      RoomFeatures.scratchers,
      RoomFeatures.suspensionBridges,
    ],
    number_of_cats: 1,
    price: 20.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174100',
      name: 'Sede Libertador',
      address: 'Libertador 2000',
      city: 'Capital Federal',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 20,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174001',
    name: 'Elite Suite',
    description:
      'A spacious room designed for cats to relax and play, featuring multiple hammocks, scratchers, and a cozy hiding spot.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427713/room_19_p9j7k7.jpg',
    features: [RoomFeatures.hidingPlace, RoomFeatures.scratchers],
    number_of_cats: 2,
    price: 35.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174100',
      name: 'Sede Libertador',
      address: 'Libertador 2000',
      city: 'Capital Federal',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 20,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174002',
    name: 'Luxury Suite',
    description:
      'This suite offers comfort and fun with hammocks, scratchers, and bridges, perfect for active cats.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427712/room_20_rjkcjf.jpg',
    features: [RoomFeatures.hammocks, RoomFeatures.scratchers],
    number_of_cats: 3,
    price: 25.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174101',
      name: 'Sede Vicente López',
      address: 'Eduardo Madero 1215',
      city: 'Vicente López, Buenos Aires',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 10,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174003',
    name: 'Sensational Suite',
    description:
      'An exclusive suite for cats who love climbing and scratching, with suspension bridges and comfy hammocks.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427710/room_5_wq2qny.png',
    features: [
      RoomFeatures.hammocks,
      RoomFeatures.scratchers,
      RoomFeatures.suspensionBridges,
    ],
    number_of_cats: 1,
    price: 30.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174101',
      name: 'Sede Vicente López',
      address: 'Eduardo Madero 1215',
      city: 'Vicente López, Buenos Aires',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 10,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174004',
    name: 'Capital Suite',
    description:
      'Perfect for solo feline guests, this suite includes a hiding place, scratchers, and a hammock for ultimate relaxation.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427710/room_5_wq2qny.png',
    features: [
      RoomFeatures.hidingPlace,
      RoomFeatures.hammocks,
      RoomFeatures.scratchers,
    ],
    number_of_cats: 1,
    price: 20.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174100',
      name: 'Sede Libertador',
      address: 'Libertador 2000',
      city: 'Capital Federal',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 20,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174005',
    name: 'Jungle Suite',
    description:
      'A premium suite designed for adventurous cats, featuring all the amenities for climbing, scratching, and hiding.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427712/room_21_pxia5w.jpg',
    features: [RoomFeatures.hidingPlace, RoomFeatures.suspensionBridges],
    number_of_cats: 2,
    price: 40.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174101',
      name: 'Sede Vicente López',
      address: 'Eduardo Madero 1215',
      city: 'Vicente López, Buenos Aires',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 10,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },

  {
    id: '123e4567-e89b-12d3-a456-426614174006',
    name: 'Royal Paws Suite',
    description:
      'A relaxing suite with a focus on comfort, offering a hiding place and hammocks to make your cat feel at home.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427716/room_36_umziwv.jpg',
    features: [RoomFeatures.hidingPlace, RoomFeatures.hammocks],
    number_of_cats: 2,
    price: 25.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174101',
      name: 'Sede Vicente López',
      address: 'Eduardo Madero 1215',
      city: 'Vicente López, Buenos Aires',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 10,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174007',
    name: 'Bridge Paradise Suite',
    description:
      'A luxury suite with suspension bridges, hammocks, and scratchers for the ultimate cat experience.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427710/room_4_vxhpbe.png',
    features: [
      RoomFeatures.hammocks,
      RoomFeatures.scratchers,
      RoomFeatures.suspensionBridges,
    ],
    number_of_cats: 4,
    price: 50.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174101',
      name: 'Sede Vicente López',
      address: 'Eduardo Madero 1215',
      city: 'Vicente López, Buenos Aires',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 10,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174008',
    name: 'Cozy Nook',
    description:
      'A small and cozy room perfect for shy cats, featuring a hiding place and soft hammocks.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427710/room_4_vxhpbe.png',
    features: [RoomFeatures.hidingPlace, RoomFeatures.hammocks],
    number_of_cats: 1,
    price: 15.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174100',
      name: 'Sede Libertador',
      address: 'Libertador 2000',
      city: 'Capital Federal',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 20,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174009',
    name: 'Adventure Room',
    description:
      'An exciting room with climbing structures and scratchers for playful cats.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427708/room_12_r81enw.jpg',
    features: [RoomFeatures.scratchers, RoomFeatures.suspensionBridges],
    number_of_cats: 2,
    price: 30.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174101',
      name: 'Sede Vicente López',
      address: 'Eduardo Madero 1215',
      city: 'Vicente López, Buenos Aires',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 10,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174010',
    name: 'Sunny Retreat',
    description:
      'A bright room with plenty of sunlight, perfect for cats who love to lounge.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427710/room_16_yosnlq.jpg',
    features: [RoomFeatures.hammocks],
    number_of_cats: 1,
    price: 20.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174100',
      name: 'Sede Libertador',
      address: 'Libertador 2000',
      city: 'Capital Federal',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 20,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174011',
    name: 'Playful Paradise',
    description:
      'A fun room filled with toys, scratchers, and climbing areas for active cats.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427713/room_24_v2gf5z.jpg',
    features: [RoomFeatures.hammocks, RoomFeatures.scratchers],
    number_of_cats: 3,
    price: 35.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174101',
      name: 'Sede Vicente López',
      address: 'Eduardo Madero 1215',
      city: 'Vicente López, Buenos Aires',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 10,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174012',
    name: 'Serene Suite',
    description:
      'A peaceful room designed for relaxation, featuring soft bedding and a cozy atmosphere.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427714/room_28_az1wj1.jpg',
    features: [RoomFeatures.hidingPlace],
    number_of_cats: 1,
    price: 18.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174100',
      name: 'Sede Libertador',
      address: 'Libertador 2000',
      city: 'Capital Federal',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 20,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174013',
    name: 'Royal Retreat',
    description:
      'A luxurious room with all the amenities for a pampered cat experience.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427715/room_29_nffwkl.jpg',
    features: [RoomFeatures.hammocks, RoomFeatures.scratchers],
    number_of_cats: 2,
    price: 45.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174101',
      name: 'Sede Vicente López',
      address: 'Eduardo Madero 1215',
      city: 'Vicente López, Buenos Aires',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 10,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174014',
    name: 'Whisker Wonderland',
    description:
      'A whimsical room filled with climbing structures and fun hiding spots.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427708/room_3_sqdabw.jpg',
    features: [RoomFeatures.hidingPlace, RoomFeatures.scratchers],
    number_of_cats: 3,
    price: 40.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174100',
      name: 'Sede Libertador',
      address: 'Libertador 2000',
      city: 'Capital Federal',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 20,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174015',
    name: 'Feline Fantasy',
    description:
      'A dream room for cats, featuring hammocks, scratchers, and plenty of space to play.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427712/room_11_vtflkn.jpg',
    features: [RoomFeatures.hammocks, RoomFeatures.scratchers],
    number_of_cats: 4,
    price: 50.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174101',
      name: 'Sede Vicente López',
      address: 'Eduardo Madero 1215',
      city: 'Vicente López, Buenos Aires',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 10,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174016',
    name: 'Kitty Kingdom',
    description:
      'A spacious room designed for multiple cats, featuring climbing areas and cozy spots.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427713/room_17_qccglv.jpg',
    features: [RoomFeatures.hidingPlace, RoomFeatures.hammocks],
    number_of_cats: 5,
    price: 60.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174100',
      name: 'Sede Libertador',
      address: 'Libertador 2000',
      city: 'Capital Federal',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 20,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174017',
    name: 'Purrfect Hideaway',
    description:
      'A secluded room for cats who enjoy their privacy, with plenty of hiding spots.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427714/room_27_lb3wbr.jpg',
    features: [RoomFeatures.hidingPlace],
    number_of_cats: 1,
    price: 15.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174101',
      name: 'Sede Vicente López',
      address: 'Eduardo Madero 1215',
      city: 'Vicente López, Buenos Aires',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 10,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174018',
    name: 'Cuddle Corner',
    description:
      'A warm and inviting room perfect for cuddly cats, featuring soft bedding and hammocks.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427715/room_33_vedx3s.jpg',
    features: [RoomFeatures.hammocks],
    number_of_cats: 2,
    price: 25.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174100',
      name: 'Sede Libertador',
      address: 'Libertador 2000',
      city: 'Capital Federal',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 20,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174019',
    name: 'Furry Fiesta',
    description:
      'A vibrant room filled with toys and climbing structures for energetic cats.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427708/room_2_axwrzk.jpg',
    features: [RoomFeatures.scratchers, RoomFeatures.hammocks],
    number_of_cats: 3,
    price: 40.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174101',
      name: 'Sede Vicente López',
      address: 'Eduardo Madero 1215',
      city: 'Vicente López, Buenos Aires',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 10,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174020',
    name: 'Charming Chamber',
    description:
      'A delightful room with a mix of climbing and hiding spots for curious cats.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427709/room_1_z9wwl4.png',
    features: [RoomFeatures.hidingPlace, RoomFeatures.scratchers],
    number_of_cats: 2,
    price: 30.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174100',
      name: 'Sede Libertador',
      address: 'Libertador 2000',
      city: 'Capital Federal',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 20,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174021',
    name: 'Majestic Manor',
    description:
      'An elegant room designed for the royal feline, featuring luxurious amenities.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427710/room_15_cmmwzx.jpg',
    features: [RoomFeatures.hammocks, RoomFeatures.suspensionBridges],
    number_of_cats: 4,
    price: 55.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174101',
      name: 'Sede Vicente López',
      address: 'Eduardo Madero 1215',
      city: 'Vicente López, Buenos Aires',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 10,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174022',
    name: 'Paw Paradise',
    description:
      'A spacious room with plenty of climbing and scratching opportunities for active cats.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427711/room_9_ihwstb.jpg',
    features: [RoomFeatures.hammocks, RoomFeatures.scratchers],
    number_of_cats: 3,
    price: 45.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174100',
      name: 'Sede Libertador',
      address: 'Libertador 2000',
      city: 'Capital Federal',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 20,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174023',
    name: 'Feline Fiesta',
    description:
      'A lively room filled with climbing structures and toys for playful cats.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427709/room_13_ghcc1f.jpg',
    features: [RoomFeatures.hammocks, RoomFeatures.scratchers],
    number_of_cats: 4,
    price: 50.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174101',
      name: 'Sede Vicente López',
      address: 'Eduardo Madero 1215',
      city: 'Vicente López, Buenos Aires',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 10,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174024',
    name: 'Cuddle Cove',
    description:
      'A cozy room designed for cuddly cats, featuring soft bedding and hammocks.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427713/room_22_hvcvgv.jpg',
    features: [RoomFeatures.hidingPlace, RoomFeatures.hammocks],
    number_of_cats: 2,
    price: 25.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174100',
      name: 'Sede Libertador',
      address: 'Libertador 2000',
      city: 'Capital Federal',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 20,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174025',
    name: 'Whisker Retreat',
    description:
      'A magical room filled with climbing structures and cozy spots for cats to explore.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427711/room_10_rtr50j.jpg',
    features: [RoomFeatures.hidingPlace, RoomFeatures.scratchers],
    number_of_cats: 3,
    price: 40.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174101',
      name: 'Sede Vicente López',
      address: 'Eduardo Madero 1215',
      city: 'Vicente López, Buenos Aires',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 10,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174026',
    name: 'Purrfect Retreat',
    description:
      'A serene room designed for relaxation, featuring soft bedding and a cozy atmosphere.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427715/room_31_jcenfw.jpg',
    features: [RoomFeatures.hidingPlace],
    number_of_cats: 1,
    price: 15.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174100',
      name: 'Sede Libertador',
      address: 'Libertador 2000',
      city: 'Capital Federal',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 20,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174027',
    name: 'Furry Corner',
    description:
      'A vibrant room filled with toys and climbing structures for energetic cats.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427715/room_30_ccnysi.jpg',
    features: [RoomFeatures.scratchers, RoomFeatures.hammocks],
    number_of_cats: 3,
    price: 40.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174101',
      name: 'Sede Vicente López',
      address: 'Eduardo Madero 1215',
      city: 'Vicente López, Buenos Aires',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 10,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174028',
    name: 'Furry Chamber',
    description:
      'A delightful room with a mix of climbing and hiding spots for curious cats.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427708/room_14_b9uxk3.jpg',
    features: [RoomFeatures.hidingPlace, RoomFeatures.scratchers],
    number_of_cats: 2,
    price: 30.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174100',
      name: 'Sede Libertador',
      address: 'Libertador 2000',
      city: 'Capital Federal',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 20,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174029',
    name: 'Furry Manor',
    description:
      'An elegant room designed for the royal feline, featuring luxurious amenities.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427715/room_32_gpwlw6.jpg',
    features: [RoomFeatures.hammocks, RoomFeatures.suspensionBridges],
    number_of_cats: 4,
    price: 55.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174101',
      name: 'Sede Vicente López',
      address: 'Eduardo Madero 1215',
      city: 'Vicente López, Buenos Aires',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 10,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174030',
    name: 'Feline Paradise',
    description:
      'A spacious room with plenty of climbing and scratching opportunities for active cats.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427713/room_23_z675vn.jpg',
    features: [RoomFeatures.hammocks, RoomFeatures.scratchers],
    number_of_cats: 3,
    price: 45.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174100',
      name: 'Sede Libertador',
      address: 'Libertador 2000',
      city: 'Capital Federal',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 20,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174031',
    name: 'Kitty Fiesta',
    description:
      'A lively room filled with climbing structures and toys for playful cats.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427713/room_18_usahkk.jpg',
    features: [RoomFeatures.hammocks, RoomFeatures.scratchers],
    number_of_cats: 4,
    price: 50.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174101',
      name: 'Sede Vicente López',
      address: 'Eduardo Madero 1215',
      city: 'Vicente López, Buenos Aires',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 10,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174033',
    name: 'Whisker Fiesta',
    description:
      'A magical room filled with climbing structures and cozy spots for cats to explore.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427714/room_26_gyftps.jpg',
    features: [RoomFeatures.hidingPlace, RoomFeatures.scratchers],
    number_of_cats: 3,
    price: 40.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174101',
      name: 'Sede Vicente López',
      address: 'Eduardo Madero 1215',
      city: 'Vicente López, Buenos Aires',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 10,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174034',
    name: 'Purrfect Mansion',
    description:
      'A serene room designed for relaxation, featuring soft bedding and a cozy atmosphere.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427714/room_25_wudtjw.jpg',
    features: [RoomFeatures.hidingPlace],
    number_of_cats: 1,
    price: 15.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174100',
      name: 'Sede Libertador',
      address: 'Libertador 2000',
      city: 'Capital Federal',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 20,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174035',
    name: 'Furry Paradise',
    description:
      'A vibrant room filled with toys and climbing structures for energetic cats.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427711/room_8_p5mt7u.jpg',
    features: [RoomFeatures.scratchers, RoomFeatures.hammocks],
    number_of_cats: 3,
    price: 40.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174101',
      name: 'Sede Vicente López',
      address: 'Eduardo Madero 1215',
      city: 'Vicente López, Buenos Aires',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 10,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174036',
    name: 'Whiskers Chamber',
    description:
      'A delightful room with a mix of climbing and hiding spots for curious cats.',
    img: 'https://res.cloudinary.com/dawjlfvoj/image/upload/v1737427716/room_35_rnaa3i.jpg',
    features: [RoomFeatures.hidingPlace, RoomFeatures.scratchers],
    number_of_cats: 2,
    price: 30.0,
    available: true,
    deleted_at: null,
    reservations: [],
    location: {
      id: '123e4567-e89b-12d3-a456-426614174100',
      name: 'Sede Libertador',
      address: 'Libertador 2000',
      city: 'Capital Federal',
      country: 'Argentina',
      coordinates: { lat: 24.3153102, lng: -75.7379289 },
      capacity: 20,
      open: true,
      rooms: [],
      caretakers: [],
    },
  },
];
