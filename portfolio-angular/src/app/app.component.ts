import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationModule } from './translation.module';

@Component({
    selector: 'app-root',
    imports: [
        CommonModule,
        RouterOutlet,
        HttpClientModule,
        TranslateModule,
        NavBarComponent,
        TranslationModule,
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mental-Health-app';

  constructor(private translate: TranslateService) {
    // Check if we're in a browser environment
    if (this.isBrowser()) {
      const storedLanguage = localStorage.getItem('selectedLanguage');
      if (storedLanguage) {
        this.translate.use(storedLanguage);
      } else {
        // No stored language; use default
        this.setLanguage('en');
      }
    } else {
      // Not in browser environment; set default
      this.translate.setDefaultLang('en');
    }
  }
  
  // Utility method for setting the language and storing it
  setLanguage(language: string) {
    this.translate.setDefaultLang(language); // Set default language
    this.translate.use(language); // Activate the language
    if (this.isBrowser()) {
      localStorage.setItem('selectedLanguage', language); // Save to localStorage
    }
  }

  isBrowser(): boolean {
    const isBrowser = typeof window !== 'undefined' && typeof localStorage !== 'undefined';
    console.log('Is browser:', isBrowser);   
    return isBrowser;
  }
  
}
