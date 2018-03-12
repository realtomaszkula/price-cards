import {
  query,
  animate,
  stagger,
  trigger,
  style,
  transition,
  AnimationMetadataType,
} from '@angular/animations';

export const cardAnimation = trigger('cards', [
  transition(':enter', [
    query('zet-price-card', [
      style({ opacity: 0 }),
      stagger('200ms', [animate('2000ms', style({ opacity: 1 }))]),
    ]),
  ]),
]);
