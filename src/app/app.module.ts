import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { ExternalVacanciesComponent } from './pages/external-vacancies/external-vacancies.component';
import { ApplicantsSearchComponent } from './pages/applicants-search/applicants-search.component';
import { UserSearchComponent } from './pages/user-search/user-search.component';

@NgModule({
  declarations: [AppComponent, ApplicantsSearchComponent, UserSearchComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // Vex
    VexModule,
    CustomLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
