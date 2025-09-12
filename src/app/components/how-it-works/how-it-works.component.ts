import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionObserverService } from '../../services/intersection-observer.service';
import { ScrollAnimationComponent } from '../../comon-components/scroll-animation/scroll-animation.component';
import { BackgroundElementsComponent } from '../../comon-components/background-elements/background-elements.component';
import { Step } from '../../models/step.model';

@Component({
    selector: 'app-how-it-works',
    imports: [CommonModule, ScrollAnimationComponent, BackgroundElementsComponent],
    templateUrl: './how-it-works.component.html',
    styles: [`
    :host {
        display: block;
        }
    `]
})
export class HowItWorksComponent {
    isVisible = false;

    steps: Step[] = [
        {
            letter: "A",
            icon: "settings",
            title: "Configura tu nómina",
            description: "Define tus reglas: tipos de contrato, períodos, conceptos, fórmulas y condiciones fiscales. Bantis se adapta a cualquier país o sistema."
        },
        {
            letter: "B",
            icon: "filetext",
            title: "Captura incidencias fácilmente",
            description: "Registra asistencias, faltas, vacaciones, bonos, deducciones o cualquier transacción desde una interfaz intuitiva."
        },
        {
            letter: "C",
            icon: "zap",
            title: "Procesa en segundos",
            description: "Con un clic, calcula automáticamente la nómina basada en tu configuración. Sin errores, sin complicaciones."
        },
        {
            letter: "D",
            icon: "checkcircle",
            title: "Revisa y autoriza",
            description: "Valida resultados, revisa reportes y autoriza pagos desde una sola ubicación, con total trazabilidad."
        },
        {
            letter: "E",
            icon: "send",
            title: "Despacha y reporta",
            description: "Genera archivos para bancos, SAT, IMSS o sistemas contables. Todo listo para timbrado y cumplimiento fiscal."
        }
    ];

    constructor(private intersectionObserver: IntersectionObserverService) { }

    ngOnInit() {
        this.intersectionObserver.observe('#how-it-works .grid', () => {
            this.isVisible = true;
        });
    }

    getHoverShadow(index: number): string {
        return this.isVisible ? '' : '0 10px 25px -3px rgba(0, 0, 0, 0.1)';
    }
}
