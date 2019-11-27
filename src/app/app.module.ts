import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './shared/component/banner/banner.component';
import { CardComponent } from './shared/component/card/card.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { LabelDescriptionComponent } from './shared/component/label-description/label-description.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CardComponent,
    NavbarComponent,
    LabelDescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
