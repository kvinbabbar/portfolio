import {
    trigger,
    transition,
    animate,
    style,
    query,
    animateChild,
    group
} from '@angular/animations';

export const routeAnimation = trigger('slideUp', [
    transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                width: '100%',
                top: 0,
                left: 0
            })
        ], {optional: true}),
        query(
            ':enter',
            [style({ top: '100%' })],
            { optional: true }
        ),
        query(':leave', animateChild(), { optional: true }),
        group([
            query(
                ':leave',
                [animate('.3s', style({
                    top: '-3000px'
                }))],
                { optional: true }
            ),
            query(
                ':enter',
                [animate('.3s', style({
                    top: '0'
                }))],
                { optional: true }
            )
        ]),
        query('*', animateChild(), { optional: true }),
    ])
]);