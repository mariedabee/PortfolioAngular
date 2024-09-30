import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GeolocationService } from '../../services/geolocation.service';
import { LocationService } from '../../services/location.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TranslationModule } from '../../translation.module';

/**
 * Component for providing assistance options based on the user's location.
 * Displays local emergency hotlines and provides navigation to self-help resources.
 */
@Component({
  selector: 'app-need-help',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, TranslationModule],
  templateUrl: './need-help.component.html',
  styleUrls: ['./need-help.component.scss'],
})
export class NeedHelpComponent implements OnInit {
  /**
   * Stores the user's current location country code.
   */
  location: string = '';

  /**
   * Object mapping country codes to their respective emergency hotlines.
   */
  hotlines: { [key: string]: string } = {
    US: '1-800-273-TALK (8255)',
    UK: '116 123',
    CA: '1-833-456-4566',
    DE: '0800 111 0 111', // Germany
    FR: '01 45 39 40 00', // France
    IT: '800 86 00 22', // Italy
    ES: '914 590 055', // Spain
    NL: '0900 0767', // Netherlands
    BE: '1813', // Belgium
  };

  /**
   * Stores the emergency hotline for the user's current location.
   */
  hotline: string = '';

  /**
   * Use the `inject` function to resolve dependencies in standalone components.
   */
  private geolocationService = inject(GeolocationService);
  private locationService = inject(LocationService);

  constructor(private router: Router, private translate: TranslateService) {
    const newLang = this.translate.getBrowserLang() || 'en';
    this.translate.use(newLang);
  }

  /**
   * Lifecycle hook that is called after the component has been initialized.
   * Retrieves the user's current location and updates the hotline based on the location.
   */
  ngOnInit(): void {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      this.translate.use(storedLanguage);
    }

    this.geolocationService.getPosition().then((pos: GeolocationPosition) => {
      const { latitude, longitude } = pos.coords;
      this.locationService
        .getLocation(latitude, longitude)
        .subscribe((data: any) => {
          this.location = data.results[0].components.country_code.toUpperCase();
          this.hotline =
            this.hotlines[this.location] ||
            'Please call your local emergency number.';
        });
    });
  }

  /**
   * Navigates to the book recommendations page for self-help resources.
   */
  goToBookRecommendations(): void {
    this.router.navigate(['/self-help-book-recommendation']);
  }

  /**
   * Navigates to the self-help exercises page.
   */
  goToSelfHelpExercises(): void {
    this.router.navigate(['/self-help-excercises']);
  }

  /**
   * Navigates to the support groups page.
   */
  goToSupportGroupss(): void {
    this.router.navigate(['/support-groups']);
  }
}
