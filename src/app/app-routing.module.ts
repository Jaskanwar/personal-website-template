import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PicturePanelComponent } from './picture-panel/picture-panel.component';


const routes: Routes = [
  { path: 'about',component: AboutComponent },
  { path: 'photo', component: PicturePanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
