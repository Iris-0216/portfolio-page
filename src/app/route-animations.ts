import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild,
} from '@angular/animations';

export const fader = trigger('routerAnimations', [
  transition('Top <=> *', [
    query(
      ':enter, :leave',
      [
        // start point
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'translateY(7vh) ',
        }),
      ],
      { optional: true }
    ),
    // end point
    query(
      ':enter',
      [
        animate(
          '900ms ease-in-out',
          style({
            opacity: 1,
            transform: 'translateY(0)',
          })
        ),
      ],
      { optional: true }
    ),
    query(':leave', animateChild(), { optional: true }),
  ]),
]);

export const slider = trigger('routerAnimations', [
  transition('Done => PjIntro', slideTo('right')),
  transition('PjIntro => Done', slideTo('left')),
]);

function slideTo(direction: string) {
  const optional = { optional: true };
  return [
    query(
      ':enter,:leave',
      [
        style({
          position: 'absolute',
          top: 0,
          [direction]: 0,
          width: '100%',
        }),
      ],
      optional
    ),
    query(
      ':enter',
      style({
        [direction]: '-100%',
      })
    ),
    // group中的动画是同时发生的
    group([
      query(':leave', [animate('600ms ease', style({ [direction]: '100%' }))]),
      query(':enter', [animate('600ms ease', style({ [direction]: '0' }))]),
    ]),
  ];
}
