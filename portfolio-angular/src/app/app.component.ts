import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationModule } from './translation.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    TranslateModule,
    NavBarComponent,
    TranslationModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mental-Health-app';

  constructor(private translate: TranslateService) {
    // Check if localStorage is available
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedLanguage = localStorage.getItem('selectedLanguage');
      if (storedLanguage) {
        this.translate.use(storedLanguage);
      } else {
        this.translate.setDefaultLang('en'); // Fallback to default language
      }
    } else {
      // Handle the case when localStorage is not available (e.g., SSR)
      this.translate.setDefaultLang('en'); // Fallback to default language
    }
  }
}
