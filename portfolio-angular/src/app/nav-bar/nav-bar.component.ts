import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslationModule } from '../translation.module';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslationModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.get('NAV.LOGIN').subscribe((res: string) => {
      console.log('Translation for NAV.LOGIN: from app', res);
    });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
