import {
    trigger,
    animate,
    style,
    transition,
    query,
    group
} from '@angular/animations';

export const previewModalAnimation = trigger('previewModal', [
    transition(':enter', [
        group([
            query('.preview-head', [
                style({transform: 'translateY(-100%)'}),
                animate('.3s ease-in', style({transform: 'translateY(0)'}))
            ]),
            query('.preview-body', [
                style({transform: 'scale(0.1)'}),
                animate('.3s ease', style({transform: 'scale(1)'}))
            ]),
            query('.preview-foot', [
                style({transform: 'translateY(100%)'}),
                animate('.3s ease-in', style({transform: 'translateY(0)'}))
            ])
        ])
    ]),
    transition(':leave', [
        group([
            query('.preview-head', [
                animate('.3s ease-in', style({transform: 'translateY(-100%)'}))
            ]),
            query('.preview-body', [
                animate('.3s ease', style({transform: 'scale(0.1)'}))
            ]),
            query('.preview-foot', [
                animate('.3s ease-in', style({ transform: 'translateY(100%)'}))
            ])
        ])
    ])
])