import {
  Component,
  HostBinding,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  Router,
  RouterModule,
  Routes,
  RoutesRecognized,
} from '@angular/router';
@Component({
  selector: 'nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.css'],
})
export class NavDrawerComponent implements OnInit {
  @Input()
  @HostBinding('class.drawer-open')
  isDrawerOpen: boolean;

  @Output()
  drawerToggleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  scroll: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onNavLinkClicked($event: MouseEvent) {
    this.isDrawerOpen = false;
    this.drawerToggleEmitter.emit(this.isDrawerOpen);
  }

  route(id) {
    document.getElementById(id).scrollIntoView();
  }
}
