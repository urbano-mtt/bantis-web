import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionObserverService } from '../../services/intersection-observer.service';
import { ScrollAnimationComponent } from '../../comon-components/scroll-animation/scroll-animation.component';
import { BackgroundElementsComponent } from '../../comon-components/background-elements/background-elements.component';
import { Feature } from '../../models/feature.model';

@Component({
    selector: 'app-features',
    imports: [CommonModule, ScrollAnimationComponent, BackgroundElementsComponent],
    templateUrl: './features.component.html',
    styles: [`
    :host {
        display: block;
        }
    `]
})
export class FeaturesComponent {
    isVisible = false;

    features: Feature[] = [
        {
            icon: "globe",
            title: "Nómina adaptable a cualquier país",
            description: "Diseñada para cumplir con marcos legales y fiscales internacionales, con flexibilidad completa en períodos, cálculos y reportes.",
            image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        {
            icon: "brain",
            title: "🧠 Motor de cálculo inteligente",
            description: "Procesamiento automatizado con fórmulas personalizables, reglas por tipo de contrato y gestión avanzada de incidencias.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        {
            icon: "settings",
            title: "🧩 100% configurable",
            description: "Desde conceptos, percepciones, deducciones y subsidios hasta estructuras organizacionales, puestos, turnos y condiciones especiales.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        {
            icon: "barchart3",
            title: "📊 Reportes claros y profesionales",
            description: "Exporta información precisa para bancos, SAT, IMSS, contabilidad o BI. Los reportes son filtrables y exportables en PDF y Excel.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        {
            icon: "shield",
            title: "🔐 Seguridad y trazabilidad",
            description: "Control total sobre autorizaciones, historial de cambios y logs por usuario para cumplir con políticas internas y regulaciones.",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        {
            icon: "building",
            title: "💼 Multi-empresa y multi-moneda",
            description: "Gestiona múltiples razones sociales, monedas, calendarios y usuarios en una sola plataforma centralizada.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        {
            icon: "monitor",
            title: "🖥️ Acceso desde cualquier lugar",
            description: "Versión web compatible con escritorio o laptop. Optimizada para rendimiento empresarial y operación continua.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        },
        {
            icon: "plug",
            title: "🔧 Integración fácil",
            description: "Conecta con tus sistemas ERP, contables o de RH a través de APIs, archivos planos o exportaciones programadas.",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
        }
    ];

    constructor(private intersectionObserver: IntersectionObserverService) { }

    ngOnInit() {
        this.intersectionObserver.observe('#features .grid', () => {
            this.isVisible = true;
        });
    }

    getHoverShadow(): string {
        return '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
    }
}
