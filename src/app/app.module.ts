
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { Page404Component } from './page404/page404.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    ContactComponent,
    Page404Component,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers:[

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
