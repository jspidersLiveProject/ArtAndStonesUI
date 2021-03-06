import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MarbelComponent } from './marbel/marbel.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { MatGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
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
    ServicesComponent
  ],
  imports: [BrowserModule, MatGridListModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
