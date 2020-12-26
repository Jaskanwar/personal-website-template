import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoDisplayComponent } from './photo-display/photo-display.component';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { AboutComponent } from './about/about.component';

import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    PhotoDisplayComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
