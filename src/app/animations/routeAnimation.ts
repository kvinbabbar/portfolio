import {
    trigger,
    transition,
    animate,
    style,
    query
} from '@angular/animations';

export const routeAnimation = trigger('slideUp', [
    transition('* => *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                width: '100%',
                top: 0,
                left: 0
            })
        ]),
        query(
            ':enter',
            [style({ top: '100%' })],
            { optional: true }
        ),
        query(
            ':leave',
            [style({
                top: '0%'
            }), animate('.3s', style({
                top: '-100%'
            }))],
            { optional: true }
        ),
        query(
            ':enter',
            [style({
                top: '100%'
            }), animate('.3s', style({
                top: '0'
            }))],
            { optional: true }
        )
    ])
]);