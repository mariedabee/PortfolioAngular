import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms'; 
import { AuthService } from '../../services/auth.service';
import { TranslationModule } from '../../translation.module';

@Component({
    selector: 'app-login',
    imports: [RouterModule, ReactiveFormsModule, TranslationModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private translate: TranslateService,
    private fb: FormBuilder,
    private authService: AuthService // Inject AuthService for API calls
  ) {
    const newLang = this.translate.getBrowserLang() || 'en';
    this.translate.use(newLang);
  }

  ngOnInit() {
    // Initialize login form with validators
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      this.translate.use(storedLanguage);
    }
  }

  // Handle login form submission
  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      // Send API call to login the user
      this.authService.login(loginData).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          // Handle successful login (e.g., navigate to dashboard)
        },
        error: (error) => {
          console.error('Login failed', error);
          // Handle login failure (e.g., show error message)
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
