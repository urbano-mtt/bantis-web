import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { ScrollAnimationComponent } from '../../comon-components/scroll-animation/scroll-animation.component';
import { BackgroundElementsComponent } from '../../comon-components/background-elements/background-elements.component';

@Component({
    selector: 'app-hero',
    imports: [CommonModule, ScrollAnimationComponent, BackgroundElementsComponent],
    templateUrl: './hero.component.html',
    styles: ``,
    animations: [
        trigger('textAnimation', [
            state('initial', style({ opacity: 0, transform: 'translateY(30px)' })),
            state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
            transition('initial => visible', animate('800ms 200ms ease-out'))
        ]),
        trigger('highlightAnimation', [
            state('initial', style({ opacity: 0, transform: 'scale(0.8)' })),
            state('visible', style({ opacity: 1, transform: 'scale(1)' })),
            transition('initial => visible', animate('800ms 600ms ease-out'))
        ]),
        trigger('fadeAnimation', [
            state('initial', style({ opacity: 0, transform: 'translateY(20px)' })),
            state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
            transition('initial => visible', animate('600ms 800ms ease-out'))
        ]),
        trigger('buttonAnimation', [
            state('initial', style({ opacity: 0, transform: 'translateY(20px)' })),
            state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
            transition('initial => visible', animate('600ms 1000ms ease-out'))
        ]),
        trigger('imageAnimation', [
            state('normal', style({ transform: 'scale(1) rotateY(0deg)' })),
            state('hover', style({ transform: 'scale(1.02) rotateY(5deg)' })),
            transition('normal <=> hover', animate('300ms ease-out'))
        ]),
        trigger('floatAnimation', [
            transition('* => *', animate('4000ms ease-in-out', keyframes([
                style({ transform: 'translateY(0px) scale(1)', offset: 0 }),
                style({ transform: 'translateY(-10px) scale(1.1)', offset: 0.5 }),
                style({ transform: 'translateY(0px) scale(1)', offset: 1 })
            ])))
        ]),
        trigger('floatDelayedAnimation', [
            transition('* => *', animate('5000ms ease-in-out', keyframes([
                style({ transform: 'translateY(0px) scale(1)', offset: 0 }),
                style({ transform: 'translateY(10px) scale(0.9)', offset: 0.5 }),
                style({ transform: 'translateY(0px) scale(1)', offset: 1 })
            ])))
        ])
    ]
})
export class HeroComponent implements OnInit {
    animationState = 'initial';
    highlightState = 'initial';
    fadeState = 'initial';
    buttonState = 'initial';
    imageState = 'normal';

    ngOnInit(): void {
        // Secuenciar las animaciones
        setTimeout(() => this.animationState = 'visible', 100);
        setTimeout(() => this.highlightState = 'visible', 700);
        setTimeout(() => this.fadeState = 'visible', 1000);
        setTimeout(() => this.buttonState = 'visible', 1300);
    }

    onImageHover(isHovering: boolean): void {
        this.imageState = isHovering ? 'hover' : 'normal';
    }
}
