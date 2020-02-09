import {
    trigger,
    style,
    transition,
    animate,
    query
} from '@angular/animations';

export const progressBarAnimation = trigger('progressBarAnimationTrigger', [
    transition(':enter', [
        query('.progress-bar', [
            style({width: 0})
        ]),
        query('.progress-bar', [
            animate('.8s', style({width: "*"}))
        ])
    ])
]);