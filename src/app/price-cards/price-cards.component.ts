import { Component, OnInit, HostBinding } from '@angular/core';

import { PriceCardState } from './../price-card/price-card.component';
import { cardAnimation } from './price-cards.animations';

@Component({
  selector: 'zet-price-cards',
  template: `
    <zet-price-card *ngFor="let card of [1,2,3]; let i = index"
      (mouseenter)="activeId = i"
      (mouseleave)="activeId = null"
      [state]="getState(i)">
    </zet-price-card>
  `,
  styleUrls: ['./price-cards.component.scss'],
  animations: [cardAnimation],
})
export class PriceCardsComponent implements OnInit {
  activeId: number | null = null;

  @HostBinding('@cards')
  get cards() {
    return true;
  }

  constructor() {}

  ngOnInit() {}

  getState(index: number): PriceCardState | null {
    if (this.activeId !== null && index === this.activeId) {
      return PriceCardState.active;
    }

    if (this.activeId !== null && index !== this.activeId) {
      return PriceCardState.dimmed;
    }

    return null;
  }
}
