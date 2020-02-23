import { Component, Input } from '@angular/core';
import { Navbar } from '@shared/interface/navbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input() items: Navbar[];
  public menuMobile = false;

  constructor() { }

}
