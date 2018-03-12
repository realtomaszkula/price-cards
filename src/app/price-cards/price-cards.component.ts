import { Component, OnInit } from '@angular/core';

import { PriceCardState } from './../price-card/price-card.component';

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
})
export class PriceCardsComponent implements OnInit {
  activeId: number | null = null;

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
