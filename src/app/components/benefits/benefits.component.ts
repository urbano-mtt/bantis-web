import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntersectionObserverService } from '../../services/intersection-observer.service';
import { ScrollAnimationComponent } from '../../comon-components/scroll-animation/scroll-animation.component';
import { BackgroundElementsComponent } from '../../comon-components/background-elements/background-elements.component';

@Component({
    selector: 'app-benefits',
    standalone: true,
    imports: [CommonModule, ScrollAnimationComponent, BackgroundElementsComponent],
    templateUrl: './benefits.component.html',
    styles: [`
        :host {
            display: block;
        }
    `]
})
export class BenefitsComponent implements OnInit {
    isVisible = false;
    isPanelVisible = false;

    benefits = [
        "Soporte para cualquier esquema de nómina nacional o internacional",
        "Configuración de impuesto sobre la renta, seguridad social, subsidios y beneficios por país",
        "Motor de reglas flexible para adaptar fórmulas, calendarios y turnos",
        "Exportación contable, reportes y soporte de cumplimiento fiscal"
    ];

    adminItems = [
        { label: "Estado de Nómina", status: "Completado" },
        { label: "Cumplimiento Fiscal", status: "Actualizado" },
        { label: "Reportes Generados", status: "Listos" }
    ];

    constructor(private intersectionObserver: IntersectionObserverService) { }

    ngOnInit() {
        // Observe list animation
        this.intersectionObserver.observe('#benefits .space-y-4', () => {
            this.isVisible = true;
        });

        // Observe panel animation with delay
        this.intersectionObserver.observe('#benefits .bg-gradient-to-br', () => {
            setTimeout(() => {
                this.isPanelVisible = true;
            }, 500);
        });
    }
}
