import { trigger, state, style, transition, animate } from '@angular/animations';

export const slideIn = trigger('slideIn', [
  state('expanded', style({ height: '*' })),
  transition(':enter', [
    animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
  ]),
  transition(':leave', [
    animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ height: '0px', minHeight: '0', display: 'none' }))
  ])
]);
