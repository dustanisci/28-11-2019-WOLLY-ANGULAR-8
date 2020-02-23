import { Component, OnInit, Input } from '@angular/core';
import { AlertType } from '@shared/enum/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() type: AlertType;
  @Input() msg: string;

  constructor() { }

  ngOnInit() {
  }

}
