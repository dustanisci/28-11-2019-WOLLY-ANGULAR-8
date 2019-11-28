import { Component } from '@angular/core';
import { Navbar } from '@shared/interface/navbar';
import { navbar, cards, contact } from '@shared/mocky/mocky';
import { Card } from '@shared/interface/card';
import { LabelDescription } from '@shared/interface/label-description';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhonePipe } from '@shared/pipe/phone/phone.pipe';
import { AlertType } from '@shared/enum/alert';
import { AppService } from './app.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Contact } from '@shared/interface/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public navbar: Navbar[] = navbar;
  public cards: Card[] = cards;
  public contacts: LabelDescription[] = contact;
  public phone = new PhonePipe();
  public alertType: AlertType;
  public contact: Contact = new Contact();

  public contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    mail: ['', [Validators.email, Validators.required]],
    phone: ['', [Validators.maxLength(15), Validators.minLength(14), Validators.nullValidator]],
    msg: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private appService: AppService) { }

  public hideMsg(): void {
    setTimeout(() => {
      this.alertType = null;
    }, 1500);
  }

  public sendContact() {
    this.contact.name = this.contactForm.get('name').value;
    this.contact.mail = this.contactForm.get('mail').value;
    this.contact.msg = this.contactForm.get('msg').value;
    this.contact.phone = this.contactForm.get('phone').value;

    this.appService.send(this.contact).subscribe(
      (result) => {
        this.alertType = 1;
        this.hideMsg();
        this.contactForm.reset();
      },
      (error: HttpErrorResponse) => {
        this.alertType = 2;
        this.hideMsg();
      });
  }

}
