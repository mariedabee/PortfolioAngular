import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationModule } from '../../translation.module';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [TranslationModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {
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