import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BannerComponent } from '@shared/components/banner/banner.component';
import { CardComponent } from '@shared/components/card/card.component';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { LabelDescriptionComponent } from '@shared/components/label-description/label-description.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhonePipe } from '@shared/pipe/phone/phone.pipe';
import { AlertComponent } from '@shared/components/alert/alert.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CardComponent,
    NavbarComponent,
    LabelDescriptionComponent,
    PhonePipe,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
