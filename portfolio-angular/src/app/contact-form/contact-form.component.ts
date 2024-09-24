import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core'; 
import { TranslationModule } from '../translation.module';

/**
 * Component for displaying and handling a contact form.
 * Allows users to submit contact information which is sent to a backend server.
 */
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    TranslationModule,
  ],
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  private readonly apiUrl = 'http://localhost:4000/api/send-contact-email';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private translate: TranslateService
  ) {
    const newLang = this.translate.getBrowserLang() || 'en';
    this.translate.use(newLang);
  }

  ngOnInit(): void {
    this.initializeForm();
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      this.translate.use(storedLanguage);
    }
  }

  /**
   * Initializes the contact form with form controls and validators.
   */
  private initializeForm(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  /**
   * Submits the form data to the backend server.
   * If the form is valid, the data is sent to the server and the form is reset.
   */
  submitForm(): void {
    if (this.contactForm.valid) {
      this.http.post<any>(this.apiUrl, this.contactForm.value).subscribe({
        next: (response) => {
          console.log('Email sent:', response);
          this.contactForm.reset(); // Reset the form on successful submission
        },
        error: (error) => {
          console.error('Error sending email:', error);
        },
      });
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }
}
