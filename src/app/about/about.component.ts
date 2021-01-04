import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  email = "example@gmail.com"
  phone = "xxxxxxxxxx"
  constructor() { }

  ngOnInit(): void {
  }
}
