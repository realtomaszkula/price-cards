import { Component, OnInit, Input, HostBinding } from '@angular/core';

export enum PriceCardState {
  active = 'active',
  dimmed = 'dimmed',
}

@Component({
  selector: 'zet-price-card',
  template: `
  <div> Card </div>
  `,
  styleUrls: ['./price-card.component.scss'],
})
export class PriceCardComponent implements OnInit {
  @Input() state: PriceCardState | null;

  @HostBinding('class.active')
  get active() {
    return this.state === PriceCardState.active;
  }

  @HostBinding('class.dimmed')
  get dimmed() {
    return this.state === PriceCardState.dimmed;
  }

  constructor() {}

  ngOnInit() {}
}
