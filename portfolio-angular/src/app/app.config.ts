import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { TranslationModule } from './translation.module'; // Import the new module

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    TranslationModule, // Use the new module here
  ],
};
