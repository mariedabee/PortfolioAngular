// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NeedHelpComponent } from './need-help/need-help.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SuggestionBoxComponent } from './suggestions/suggestion-box/suggestion-box.component';
import { SuggestionsPageComponent } from './suggestions/suggestions-page/suggestions-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'need-help', component: NeedHelpComponent },
  { path: 'suggestion-box', component: SuggestionBoxComponent },
  { path: 'suggestions-page', component: SuggestionsPageComponent}
];
