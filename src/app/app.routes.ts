import { Routes } from '@angular/router';
import { HomeView } from './views/home/home.view';
import { ResultsView } from './views/results/results.view';

export const routes: Routes = [
  {
    path: '',
    component: HomeView,
    title: 'Nexus SearchLink - Inicio'
  },
  {
    path: 'search',
    component: ResultsView,
    title: 'Nexus SearchLink - Resultados'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
