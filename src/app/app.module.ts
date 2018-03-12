import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PriceCardsComponent } from './price-cards/price-cards.component';
import { PriceCardComponent } from './price-card/price-card.component';

@NgModule({
  declarations: [AppComponent, PriceCardsComponent, PriceCardComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
