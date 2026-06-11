import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.view.html',
  styleUrl: './home.view.css'
})
export class HomeView {
  searchQuery: string = '';

    constructor(private router: Router) {}

    onSearch(): void {
      if (this.searchQuery.trim()) {
        // Navegamos pasando la query como parámetro de ruta de forma limpia
        this.router.navigate(['/search'], { queryParams: { q: this.searchQuery } });
      }
    }
}
