import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslationModule } from '../translation.module'; 
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-nav-bar',
    imports: [CommonModule, RouterModule, TranslationModule],
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(private translate: TranslateService) {}

  switchLanguage(language: string) {
    this.translate.setDefaultLang(language);
    this.translate.use(language);
    localStorage.setItem('selectedLanguage', language);
    window.location.reload();
  }
}
