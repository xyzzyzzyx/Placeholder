import { ApplicationConfig, Provider, isDevMode } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';

export const appConfig = (providers: Provider[]): ApplicationConfig => {
  return {
    providers: [
      ...providers,
      provideAnimations(),
      provideEffects(),
      provideRouter(routes),
      provideRouterStore(),
      provideStore(),
      provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    ],
  };
};
