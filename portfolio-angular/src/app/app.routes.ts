// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NeedHelpComponent } from './self-help/need-help/need-help.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SuggestionBoxComponent } from './suggestions/suggestion-box/suggestion-box.component';
import { SuggestionsPageComponent } from './suggestions/suggestions-page/suggestions-page.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { BookRecommendationsComponent } from './self-help/book-recommendations/book-recommendations.component';
import { ExercisesComponent } from './self-help/exercises/exercises.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'self-help-emergency', component: NeedHelpComponent },
  { path: 'self-help-excercises', component: ExercisesComponent },
  { path: 'self-help-book-recommendation', component: BookRecommendationsComponent },
  { path: 'suggestion-box', component: SuggestionBoxComponent },
  { path: 'suggestions-page', component: SuggestionsPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
];
