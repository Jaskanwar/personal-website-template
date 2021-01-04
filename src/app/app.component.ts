import { Component, HostBinding, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'personal-website-template';
  @HostBinding('class.drawer-open')
  isDrawerOpen: boolean = false;

  toggleDrawer(isDrawerOpen: boolean) {
    this.isDrawerOpen = isDrawerOpen;
  }

  //images to be displayed in the horizontal list
  imageObject: Array<object> = [{
      image: 'assets/pictures/test.jpg',
      thumbImage: 'assets/pictures/test.jpg',
    }, {
      image: 'assets/pictures/test.jpg',
      thumbImage: 'assets/pictures/test.jpg',
    }, {
      image: 'assets/pictures/test.jpg',
      thumbImage: 'assets/pictures/test.jpg',
    }, {
      image: 'assets/pictures/test.jpg',
      thumbImage: 'assets/pictures/test.jpg',
    }, {
      image: 'assets/pictures/test.jpg',
      thumbImage: 'assets/pictures/test.jpg',
    }, {
      image: 'assets/pictures/test.jpg',
      thumbImage: 'assets/pictures/test.jpg',
    }, {
      image: 'assets/pictures/test.jpg',
      thumbImage: 'assets/pictures/test.jpg',
    }, {
      image: 'assets/pictures/test.jpg',
      thumbImage: 'assets/pictures/test.jpg',
    }, {
      image: 'assets/pictures/test.jpg',
      thumbImage: 'assets/pictures/test.jpg',
    }, {
      image: 'assets/pictures/test.jpg',
      thumbImage: 'assets/pictures/test.jpg',
    }, {
      image: 'assets/pictures/test.jpg',
      thumbImage: 'assets/pictures/test.jpg',
    }, {
      image: 'assets/pictures/test.jpg',
      thumbImage: 'assets/pictures/test.jpg',
    }, {
      image: 'assets/pictures/test.jpg',
      thumbImage: 'assets/pictures/test.jpg',
    }, {
      image: 'assets/pictures/test.jpg',
      thumbImage: 'assets/pictures/test.jpg',
    }, {
      image: 'assets/pictures/test.jpg',
      thumbImage: 'assets/pictures/test.jpg',
    }, {
      image: 'assets/pictures/test.jpg',
      thumbImage: 'assets/pictures/test.jpg',
    }
  ]
}
