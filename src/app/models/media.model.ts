export interface StreamingPlatform {
  name: string;
  logoLetters: string; // Inicial para el logo estilizado en CSS soberano
  directLink: string;
  requiresSubscription: boolean;
}

export interface MediaContent {
  id: string;
  title: string;
  type: 'Película' | 'Serie';
  year: number;
  duration: string;
  genres: string[];
  synopsis: string;
  availablePlatforms: StreamingPlatform[];
  alternatives: string[]; // IDs de películas similares
}
