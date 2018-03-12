import {
  query,
  animate,
  stagger,
  trigger,
  style,
  transition,
  group,
} from '@angular/animations';

export const cardsAnimation = trigger('cards', [
  transition(':enter', [
    group([
      query('zet-price-card .container', [style({ opacity: 0 })]),
      query('zet-price-card', [
        style({ opacity: 0 }),
        stagger('200ms', [animate('600ms', style({ opacity: 1 }))]),
      ]),
      group([
        query('zet-price-card .container', [
          stagger('200ms', [animate('400ms', style({ opacity: 1 }))]),
        ]),
        query('zet-price-card .title', [
          style({ transform: 'translateY(-10px)' }),
          stagger('200ms', [
            animate('400ms', style({ transform: 'translateY(0)' })),
          ]),
        ]),
        query('zet-price-card .content', [
          style({ transform: 'translateY(10px)' }),
          stagger('200ms', [
            animate('400ms', style({ transform: 'translateY(0)' })),
          ]),
        ]),
      ]),
    ]),
  ]),
]);
