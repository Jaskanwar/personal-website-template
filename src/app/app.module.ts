import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarModule } from './nav-bar/nav-bar.module';

import { NgImageSliderModule } from 'ng-image-slider';
import { PicturePanelComponent } from './picture-panel/picture-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    PicturePanelComponent,
  ],
  imports: [
    NgImageSliderModule,
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
