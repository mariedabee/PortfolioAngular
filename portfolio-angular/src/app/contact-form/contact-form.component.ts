import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule], // Add necessary modules
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup; // Use non-null assertion operator

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      this.http
        .post<any>(
          'http://localhost:4000/api/send-contact-email',
          this.contactForm.value
        )
        .subscribe(
          (response) => {
            console.log('Email sent:', response);
            // reset the form
            this.contactForm.reset();
          },
          (error) => {
            console.error('Error sending email:', error);
            // Handle error
          }
        );
    } else {
      // Handle form errors
    }
  }
}
