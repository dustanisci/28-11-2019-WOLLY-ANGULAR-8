import { Component } from '@angular/core';
import { Navbar } from '@shared/interface/navbar';
import { navbar, cards, contact } from '@shared/mocky/mocky';
import { Card } from '@shared/interface/card';
import { LabelDescription } from '@shared/interface/label-description';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public navbar: Navbar[] = navbar;
  public cards: Card[] = cards;
  public contacts: LabelDescription[] = contact;

  public contact: FormGroup = this.fb.group({
    name: [''],
    email: [''],
    phone: [''],
    msg: ['']
  });

  constructor(private fb: FormBuilder) { }

  private submit(): void {
    if (this.contact.invalid) {
      console.log('erro');
    } else {
      console.log('sucesso');
    }
  }

}

export function isValidAmount(control: AbstractControl) {
  return control.value === 0 || control.value === null ? { invalid: true } : null;
}
