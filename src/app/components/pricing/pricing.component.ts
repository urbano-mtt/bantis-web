import { Component } from '@angular/core';
import { IntersectionObserverService } from '../../services/intersection-observer.service';
import { Plan } from '../../models/plan.model';

@Component({
    selector: 'app-pricing',
    imports: [],
    templateUrl: './pricing.component.html',
    styles: [`
        :host {
        display: block;
        }
    `]
})
export class PricingComponent {
    isVisible = false;
    isPopularVisible = false;

    plans: Plan[] = [
        {
            name: "Inicial",
            price: "$29",
            period: "por mes",
            description: "Perfecto para pequeñas empresas",
            features: [
                "Hasta 25 empleados",
                "Procesamiento básico de nómina",
                "Reportes estándar",
                "Soporte por email",
                "Cumplimiento fiscal mensual",
                "Integraciones básicas"
            ],
            popular: false
        },
        {
            name: "Profesional",
            price: "$79",
            period: "por mes",
            description: "Ideal para empresas en crecimiento",
            features: [
                "Hasta 100 empleados",
                "Procesamiento avanzado de nómina",
                "Reportes personalizados y analítica",
                "Soporte prioritario",
                "Cumplimiento fiscal en tiempo real",
                "Integraciones avanzadas",
                "Soporte multi-moneda",
                "Pistas de auditoría"
            ],
            popular: true
        },
        {
            name: "Empresarial",
            price: "Precio",
            period: "personalizado",
            description: "Para grandes organizaciones",
            features: [
                "Empleados ilimitados",
                "Procesamiento de nivel empresarial",
                "Reportes de marca blanca",
                "Gerente de cuenta dedicado",
                "Soporte prioritario 24/7",
                "Integraciones personalizadas",
                "Gestión multi-empresa",
                "Características de seguridad avanzadas",
                "Garantías de SLA"
            ],
            popular: false
        }
    ];

    constructor(private intersectionObserver: IntersectionObserverService) { }

    ngOnInit() {
        this.intersectionObserver.observe('#pricing .grid', () => {
            this.isVisible = true;
            // Show popular badge with delay
            setTimeout(() => {
                this.isPopularVisible = true;
            }, 300);
        });
    }
}