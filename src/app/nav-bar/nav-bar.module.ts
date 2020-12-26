import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { NavBarComponent } from './nav-bar.component';

@NgModule({
  declarations: [NavBarComponent, NavDrawerComponent],
  imports: [CommonModule],
  exports: [NavBarComponent],
})
export class NavBarModule {}
