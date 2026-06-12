import { MediaContent } from '../models/media.model';

export const CATALOG_MOCK: MediaContent[] = [
  {
    id: 'avatar-2009',
    title: 'Avatar',
    type: 'Película',
    year: 2009,
    duration: '2h 42m',
    genres: ['Aventura', 'Ciencia ficción'],
    synopsis: 'Un ex-marine es enviado a Pandora, un mundo alienígena habitado por los Na\'vi, donde se debate entre seguir órdenes o proteger su nuevo hogar.',
    availablePlatforms: [
      { name: 'Netflix', logoLetters: 'N', directLink: 'https://www.netflix.com', requiresSubscription: true },
      { name: 'Prime Video', logoLetters: 'P', directLink: 'https://www.primevideo.com', requiresSubscription: true },
      { name: 'Disney+', logoLetters: 'D+', directLink: 'https://www.disneyplus.com', requiresSubscription: true }
    ],
    alternatives: ['avatar-water', 'interstellar', 'dune']
  },
  {
    id: 'avatar-water',
    title: 'Avatar: El Camino del Agua',
    type: 'Película',
    year: 2022,
    duration: '3h 12m',
    genres: ['Aventura', 'Acción'],
    synopsis: 'Jake Sully vive con su familia en Pandora. Cuando una amenaza regresa, debe trabajar con el ejército Na\'vi para proteger su planeta.',
    availablePlatforms: [
      { name: 'Disney+', logoLetters: 'D+', directLink: 'https://www.disneyplus.com', requiresSubscription: true }
    ],
    alternatives: ['avatar-2009', 'interstellar', 'blade-runner']
  },
  {
    id: 'lord-rings',
    title: 'El Señor de los Anillos',
    type: 'Película',
    year: 2001,
    duration: '2h 58m',
    genres: ['Fantasía', 'Aventura'],
    synopsis: 'Un joven Hobbit es encargado de destruir el Anillo Único para derrotar al Señor Oscuro Sauron.',
    availablePlatforms: [
      { name: 'Prime Video', logoLetters: 'P', directLink: 'https://www.primevideo.com', requiresSubscription: true }
    ],
    alternatives: ['dune', 'the-batman']
  },
  {
    id: 'dune',
    title: 'Dune',
    type: 'Película',
    year: 2021,
    duration: '2h 35m',
    genres: ['Ciencia ficción', 'Drama'],
    synopsis: 'Paul Atreides debe viajar al planeta más peligroso del universo para asegurar el futuro de su familia y su pueblo.',
    availablePlatforms: [
      { name: 'Netflix', logoLetters: 'N', directLink: 'https://www.netflix.com', requiresSubscription: true },
      { name: 'Prime Video', logoLetters: 'P', directLink: 'https://www.primevideo.com', requiresSubscription: true }
    ],
    alternatives: ['interstellar', 'blade-runner', 'avatar-2009']
  },
  {
    id: 'interstellar',
    title: 'Interestelar',
    type: 'Película',
    year: 2014,
    duration: '2h 49m',
    genres: ['Ciencia ficción', 'Drama'],
    synopsis: 'Un grupo de científicos y exploradores viaja a través de un agujero de gusano en el espacio para encontrar un nuevo hogar para la humanidad.',
    availablePlatforms: [
      { name: 'Netflix', logoLetters: 'N', directLink: 'https://www.netflix.com', requiresSubscription: true },
      { name: 'Prime Video', logoLetters: 'P', directLink: 'https://www.primevideo.com', requiresSubscription: true }
    ],
    alternatives: ['dune', 'blade-runner', 'avatar-2009']
  },
  {
    id: 'blade-runner',
    title: 'Blade Runner 2049',
    type: 'Película',
    year: 2017,
    duration: '2h 44m',
    genres: ['Ciencia ficción', 'Acción'],
    synopsis: 'Un nuevo blade runner, el oficial K del departamento de policía de Los Ángeles, descubre un secreto enterrado que podría sumergir a la sociedad en el caos.',
    availablePlatforms: [
      { name: 'Netflix', logoLetters: 'N', directLink: 'https://www.netflix.com', requiresSubscription: true }
    ],
    alternatives: ['dune', 'interstellar', 'the-batman']
  },
  {
    id: 'the-batman',
    title: 'The Batman',
    type: 'Película',
    year: 2022,
    duration: '2h 56m',
    genres: ['Acción', 'Crimen', 'Drama'],
    synopsis: 'Cuando un asesino se dirige a la élite de Gotham con una serie de maquinaciones sádicas, el mejor detective del mundo es enviado a investigar.',
    availablePlatforms: [
      { name: 'Prime Video', logoLetters: 'P', directLink: 'https://www.primevideo.com', requiresSubscription: true }
    ],
    alternatives: ['blade-runner', 'lord-rings']
  }
];
