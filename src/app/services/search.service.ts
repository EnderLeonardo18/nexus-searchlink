import { Injectable } from '@angular/core';
import { MediaContent } from '../models/media.model';
import { CATALOG_MOCK } from '../data/catalog.mock';



@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // Asignamos la base de datos simulada importada externamente
  private catalog: MediaContent[] = CATALOG_MOCK;

  constructor() {}

  // Simula consulta en tiempo real e inmediata (Austeridad)
  searchContent(query: string): MediaContent | null {
      if (!query) return null;
      const cleanQuery = query.toLowerCase().trim();
      return this.catalog.find(item => item.title.toLowerCase().includes(cleanQuery)) || null;
    }

// Obtiene las alternativas del catálogo local para mitigar el dolor del usuario
  getAlternatives(ids: string[]): MediaContent[] {
    return this.catalog.filter(item => ids.includes(item.id));
  }
}
