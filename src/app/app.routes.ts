import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'prelims',
    loadComponent: () => import('./pages/prelims/prelims').then((m) => m.Prelims),
  },
  {
    path: 'midterm',
    loadComponent: () => import('./pages/midterm/midterm').then((m) => m.Midterm),
  },
  {
    path: 'finals',
    loadComponent: () => import('./pages/finals/finals').then((m) => m.Finals),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
