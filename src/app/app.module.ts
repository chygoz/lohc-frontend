import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CareersComponent } from './careers/careers.component';
import { JobApplyFormComponent } from './job-apply-form/job-apply-form.component';
import { AboutComponent } from './about/about.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SignupComponent } from './signup/signup.component';
import { TeachersApplicationComponent } from './teachers-application/teachers-application.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CareersComponent,
    JobApplyFormComponent,
    AboutComponent,
    SignupComponent,
    TeachersApplicationComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
