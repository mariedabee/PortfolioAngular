import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
    this.translate.setDefaultLang('en');
    this.translate.get('HOME.TITLE').subscribe((res: string) => {
      console.log('Translation for HOME.TITLE: from app', res); // Should log the translated string
    });
  }
}
