import { Component } from '@angular/core';
import { IntersectionObserverService } from '../../services/intersection-observer.service';
import { CommonModule } from '@angular/common';
import { ScrollAnimationComponent } from '../../comon-components/scroll-animation/scroll-animation.component';
import { BackgroundElementsComponent } from '../../comon-components/background-elements/background-elements.component';

@Component({
    selector: 'app-cta',
    imports: [CommonModule, ScrollAnimationComponent, BackgroundElementsComponent],
    templateUrl: './cta.component.html',
    styles: [`
    :host {
        display: block;
    }
    
    @keyframes float {
        0%, 100% {
            transform: translateY(0px) scale(1);
        }
        50% {
            transform: translateY(-10px) scale(1.1);
        }
    }
    
    .animate-float {
        animation: float 6s ease-in-out infinite;
    }
    
    @keyframes float-delayed {
        0%, 100% {
            transform: translateY(0px) scale(1);
        }
        50% {
            transform: translateY(15px) scale(0.9);
        }
    }
    
    .animate-float-delayed {
        animation: float-delayed 8s ease-in-out infinite;
    }
    
    @keyframes pulse-subtle {
        0%, 100% {
        transform: scale(1);
        opacity: 0.2;
    }
    50% {
        transform: scale(1.3);
        opacity: 0.4;
    }
    }
    
    .animate-pulse-subtle {
        animation: pulse-subtle 4s ease-in-out infinite;
    }
`]
})
export class CtaComponent {
    isVisible = false;
    backgroundImage = "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')";

    constructor(private intersectionObserver: IntersectionObserverService) { }

    ngOnInit() {
        this.intersectionObserver.observe('app-cta .relative.rounded-3xl', () => {
            this.isVisible = true;
        });
    }
}
