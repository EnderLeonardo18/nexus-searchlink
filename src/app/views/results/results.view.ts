import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MediaContent } from '../../models/media.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-results',
  imports: [CommonModule, FormsModule],
  templateUrl: './results.view.html',
  styleUrl: './results.view.css'
})
export class ResultsView implements OnInit {
searchQuery: string = '';
  activeResult: MediaContent | null = null;
  alternativeContents: MediaContent[] = [];
  hasSearched: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    // Escuchamos los cambios en los parámetros de búsqueda de la URL
    this.route.queryParams.subscribe(params => {
      const query = params['q'];
      if (query) {
        this.searchQuery = query;
        this.executeSearch(query);
      }
    });
  }

  executeSearch(query: string): void {
    this.hasSearched = true;
    this.activeResult = this.searchService.searchContent(query);

    if (this.activeResult) {
      this.alternativeContents = this.searchService.getAlternatives(this.activeResult.alternatives);
    } else {
      this.alternativeContents = [];
    }
  }

  onSearchSubmit(): void {
    if (this.searchQuery.trim()) {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { q: this.searchQuery },
        queryParamsHandling: 'merge'
      });
    }
  }

  // Permite al usuario saltar a ver un contenido sugerido directamente en la misma pantalla
  viewAlternative(title: string): void {
    this.searchQuery = title;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: title },
      queryParamsHandling: 'merge'
    });
  }
}

// ===== ADICIÓN: FUNCIÓN SCROLL TO TOP =====
export class ResultsComponent {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}