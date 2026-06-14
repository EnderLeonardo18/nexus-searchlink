import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MediaContent } from '../../models/media.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './results.view.html',
  styleUrl: './results.view.css'
})
export class ResultsView implements OnInit {
  searchQuery: string = '';
  activeResult: MediaContent | null = null;
  alternativeContents: MediaContent[] = [];
  hasSearched: boolean = false;

  // Variables para las métricas de rendimiento y disponibilidad
  searchTime: number = 0;
  platformCount: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
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

    // Captura el tiempo exacto antes de iniciar la consulta
    const startTime = performance.now();

    this.activeResult = this.searchService.searchContent(query);

    // Captura el tiempo exacto al finalizar
    const endTime = performance.now();
    // Guarda la diferencia en milisegundos (redondeado a dos decimales)
    this.searchTime = parseFloat((endTime - startTime).toFixed(2));

    if (this.activeResult) {
      this.alternativeContents = this.searchService.getAlternatives(this.activeResult.alternatives);
      // Extrae la cantidad real de plataformas indexadas para este título
      this.platformCount = this.activeResult.availablePlatforms.length;
    } else {
      this.alternativeContents = [];
      this.platformCount = 0;
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
