import { Component, ElementRef, Input, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { Subscription } from 'rxjs';
import { IntersectionObserverService } from '../../services/intersection-observer.service';


export type AnimationVariant = 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate';

@Component({
    selector: 'app-scroll-animation',
    imports: [CommonModule],
    templateUrl: './scroll-animation.component.html',
    styles: ``,
    animations: [
        trigger('animationTrigger', [
            state('hidden', style({
                opacity: 0,
                transform: '{{ hiddenTransform }}'
            }), { params: { hiddenTransform: 'translateY(50px)' } }),
            state('visible', style({
                opacity: 1,
                transform: 'translateY(0) translateX(0) scale(1) rotate(0deg)'
            })),
            transition('hidden => visible', [
                animate('{{ duration }}ms {{ delay }}ms ease-out')
            ], { params: { duration: 600, delay: 0 } })
        ])
    ]
})
export class ScrollAnimationComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('container', { static: true }) container!: ElementRef<HTMLDivElement>;

    @Input() variant: AnimationVariant = 'fadeIn';
    @Input() delay: number = 0;
    @Input() duration: number = 600;
    @Input() className: string = '';
    @Input() threshold: number = 0.1;
    @Input() enableAnimations: boolean = true;

    isVisible = false;
    private subscription?: Subscription;

    // Configuración de transformaciones para cada variante
    private readonly variantTransforms = {
        fadeIn: 'translateY(0)',
        slideUp: 'translateY(50px)',
        slideLeft: 'translateX(-50px)',
        slideRight: 'translateX(50px)',
        scale: 'scale(0.8)',
        rotate: 'rotate(-10deg) scale(0.9)'
    };

    constructor(private intersectionService: IntersectionObserverService) { }

    ngOnInit(): void {
        // Si las animaciones están deshabilitadas, mostrar inmediatamente
        if (!this.enableAnimations) {
            this.isVisible = true;
        }
    }

    ngAfterViewInit(): void {
        if (this.enableAnimations && this.container) {
            // Configurar la observación del elemento
            this.subscription = this.intersectionService
                .observeElement(this.container.nativeElement, {
                    threshold: this.threshold,
                    rootMargin: '0px 0px -10% 0px',
                    triggerOnce: true
                })
                .subscribe(isInView => {
                    this.isVisible = isInView;
                });
        }
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }

        if (this.container) {
            this.intersectionService.unobserveElement(this.container.nativeElement);
        }
    }

    // Getter para obtener la transformación basada en la variante
    get hiddenTransform(): string {
        return this.variantTransforms[this.variant] || this.variantTransforms.fadeIn;
    }

    // Getter para los parámetros de animación
    get animationParams(): { hiddenTransform: string; duration: number; delay: number } {
        return {
            hiddenTransform: this.hiddenTransform,
            duration: this.duration,
            delay: this.delay
        };
    }
}