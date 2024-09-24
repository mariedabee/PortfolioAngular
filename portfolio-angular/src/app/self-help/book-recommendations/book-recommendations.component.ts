import { TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslationModule } from '../../translation.module';

@Component({
  selector: 'app-book-recommendations',
  standalone: true,
  imports: [HttpClientModule, TranslationModule],
  templateUrl: './book-recommendations.component.html',
  styleUrl: './book-recommendations.component.scss'
})
export class BookRecommendationsComponent implements OnInit {
  constructor(private translate: TranslateService) {
    const newLang = this.translate.getBrowserLang() || 'en';
    this.translate.use(newLang);
  }

  ngOnInit() {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      this.translate.use(storedLanguage);
    }
  }
}