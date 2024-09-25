import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationModule } from '../../translation.module';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; // Import necessary form classes
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [TranslationModule, RouterModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup; // Define the FormGroup

  constructor(
    private translate: TranslateService,
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService
  ) {
    // Inject FormBuilder
    const newLang = this.translate.getBrowserLang() || 'en';
    this.translate.use(newLang);
  }

  ngOnInit() {
    // Initialize form with validation
    this.signUpForm = this.fb.group(
      {
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.checkPasswords }
    ); // Add custom password validation

    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      this.translate.use(storedLanguage);
    }
  }

  // Custom validator for checking password match
  checkPasswords(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notSame: true };
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const formData = this.signUpForm.value;

      // Call the signUp method from AuthService
      this.authService.signUp(formData).subscribe({
        next: (response) => {
          console.log('Registration successful', response);
          // Handle successful sign-up here (e.g., navigate to login page)
        },
        error: (error) => {
          console.error('Registration failed', error);
          // Handle registration failure (e.g., display error message)
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
}