import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { SearchBarComponent } from './app/search-bar/search-bar.component';

@NgModule({
  // Do NOT include standalone components here
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent,
    SearchBarComponent,
    HomeComponent,
  ],
  providers: [],
  bootstrap: [], // Optional, depending on your application structure
})
export class AppModule {}
