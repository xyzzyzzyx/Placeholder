import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then(
        (mod) => mod.AboutComponent,
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./splash/splash.component').then(
        (mod) => mod.SplashComponent,
      ),
  },
];
