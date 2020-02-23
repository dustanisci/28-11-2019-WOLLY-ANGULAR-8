import { Component, Input } from '@angular/core';
import { Navbar } from '@shared/interface/navbar';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  @Input() url: string;
  @Input() description: string;
  @Input() navbar?: Navbar[];

  constructor() { }

}
