import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PriceCardsComponent } from './price-cards/price-cards.component';
import { PriceCardComponent } from './price-card/price-card.component';


@NgModule({
  declarations: [
    AppComponent,
    PriceCardsComponent,
    PriceCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
