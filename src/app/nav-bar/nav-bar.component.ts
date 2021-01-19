import {
  Component,
  Host,
  HostListener,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

import { Router, RouterModule, Routes, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  navElement: HTMLElement = null;

  isDrawerOpen: boolean;

  @Output()
  drawerToggleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.navElement = null;
    this.isDrawerOpen = false;
  }

  ngAfterViewInit() {
    this.navElement = <HTMLElement>document.getElementById('navbar');
  }

  @HostListener('window:scroll', ['$event'])
  onScroll($event: Event) {
    let scrollFactor = 200;
    let opacity = window.pageYOffset / scrollFactor;
    opacity = opacity < 1 ? opacity : 1;

    if (window.pageYOffset / scrollFactor > 1) {
      this.navElement.classList.add('navbar-shadow');
    } else {
      this.navElement.classList.remove('navbar-shadow');
    }
  }

  toggleNavDrawer(isDrawerOpen: boolean) {
    this.isDrawerOpen = isDrawerOpen;
    this.drawerToggleEmitter.emit(this.isDrawerOpen);
  }

  route(id) {
    document.getElementById(id).scrollIntoView();
  }
}
