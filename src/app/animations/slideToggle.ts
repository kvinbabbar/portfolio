import { 
    trigger, 
    query,
    transition,
    animate,
    style,
    stagger
} from '@angular/animations';

export const slideToggleAnimation = trigger('slideToggle', [
    transition(':enter, * => 0, * => -1', []),
    transition(':increment', [
        query(':enter', [
            style({opacity: 0, height: 0}),
            stagger(-50, [
                animate('300ms ease-in', style({
                    opacity:1, height: '*'
                }))
            ])
        ])
    ]),
    transition(':decrement', [
        query(':leave', [
            stagger(50, [
                animate('300ms ease-out', style({opacity: 0, height: 0}))
            ])
        ])
    ])
]);