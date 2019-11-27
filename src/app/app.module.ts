import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './shared/component/banner/banner.component';
import { CardComponent } from './shared/component/card/card.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { InputComponent } from './shared/component/input/input.component';
import { LabelDescriptionComponent } from './shared/component/label-description/label-description.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CardComponent,
    NavbarComponent,
    InputComponent,
    LabelDescriptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
