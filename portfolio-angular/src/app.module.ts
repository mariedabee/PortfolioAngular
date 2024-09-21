import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { SearchBarComponent } from './app/search-bar/search-bar.component';
import { HttpClientModule, HttpClient, provideHttpClient } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Factory function for AoT compatibility
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  // Do NOT include standalone components here
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppModule],
})
export class AppModule {}
