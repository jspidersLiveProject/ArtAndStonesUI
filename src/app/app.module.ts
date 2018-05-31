import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MarbelComponent } from './marbel/marbel.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MarbelComponent,
    ContactUsComponent,
    AboutUsComponent,
    BlogComponent,
    HomeComponent,
    ServicesComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, MatInputModule, MatGridListModule, FlexLayoutModule, AppRoutingModule, MatButtonModule, MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
