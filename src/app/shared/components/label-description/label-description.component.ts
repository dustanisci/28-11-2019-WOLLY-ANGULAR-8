import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label-description',
  templateUrl: './label-description.component.html',
  styleUrls: ['./label-description.component.scss']
})
export class LabelDescriptionComponent {

  @Input() label: string;
  @Input() description: string;

  constructor() { }

}
