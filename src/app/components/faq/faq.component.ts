import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollAnimationComponent } from '../../comon-components/scroll-animation/scroll-animation.component';
import { IntersectionObserverService } from '../../services/intersection-observer.service';
import { FAQ } from '../../models/faq.model';

@Component({
    selector: 'app-faq',
    imports: [CommonModule, ScrollAnimationComponent],
    templateUrl: './faq.component.html',
    styles: ``
})
export class FaqComponent {
    isVisible = false;

    faqs: FAQ[] = [
        {
            question: "¿Qué tan rápido puedo configurar Bantis para mi empresa?",
            answer: "La mayoría de las empresas pueden comenzar con Bantis en 24-48 horas. Nuestro equipo de incorporación te ayudará a configurar las reglas de nómina, importar datos de empleados y configurar integraciones. Para configuraciones multi-país complejas, la implementación típicamente toma 1-2 semanas.",
            isOpen: false
        },
        {
            question: "¿Bantis soporta nómina para múltiples países?",
            answer: "Sí, Bantis está diseñado para manejar nómina de cualquier país. Nuestro motor de reglas flexible se adapta a las leyes fiscales locales, requisitos de seguridad social y regulaciones laborales. Actualmente soportamos más de 50 países con plantillas preconfiguradas.",
            isOpen: false
        },
        {
            question: "¿Puede Bantis integrarse con mis sistemas existentes de RH y contabilidad?",
            answer: "Por supuesto. Bantis ofrece capacidades robustas de integración a través de APIs, exportaciones de archivos planos y sincronización programada. Soportamos sistemas populares como SAP, Oracle, QuickBooks, Xero y muchos otros. Nuestro equipo técnico también puede ayudar con integraciones personalizadas.",
            isOpen: false
        },
        {
            question: "¿Están seguros mis datos de nómina con Bantis?",
            answer: "La seguridad es nuestra máxima prioridad. Bantis utiliza encriptación de nivel empresarial, centros de datos seguros y cumple con estándares internacionales de seguridad incluyendo SOC 2, ISO 27001 y GDPR. Todos los datos están encriptados en tránsito y en reposo, con pistas de auditoría integrales y controles de acceso.",
            isOpen: false
        },
        {
            question: "¿Qué tipo de soporte proporcionan?",
            answer: "Ofrecemos múltiples niveles de soporte dependiendo de tu plan. Todos los clientes tienen acceso a nuestra base de conocimiento y soporte por email. Los planes Profesionales incluyen soporte prioritario con tiempos de respuesta más rápidos, mientras que los clientes Empresariales obtienen gerentes de cuenta dedicados y soporte telefónico 24/7.",
            isOpen: false
        },
        {
            question: "¿Puedo probar Bantis antes de comprometerme con un plan de pago?",
            answer: "¡Sí! Ofrecemos una prueba gratuita de 30 días para todos los planes. Puedes explorar todas las características, procesar nóminas de prueba e incluso incorporar algunos empleados durante tu período de prueba. No se requiere tarjeta de crédito para iniciar tu prueba.",
            isOpen: false
        },
        {
            question: "¿Cómo funcionan los precios para múltiples empresas o subsidiarias?",
            answer: "Nuestro plan Empresarial incluye gestión multi-empresa sin costo adicional. Para planes más pequeños, cada empresa adicional se cobra por separado. Sin embargo, ofrecemos descuentos por volumen para múltiples entidades y podemos crear paquetes de precios personalizados para estructuras organizacionales complejas.",
            isOpen: false
        },
        {
            question: "¿Qué reportes y analítica proporciona Bantis?",
            answer: "Bantis ofrece reportes integrales incluyendo resúmenes de nómina, reportes fiscales, documentos de cumplimiento, análisis de centros de costo y reportes personalizados. Todos los reportes pueden exportarse en formato PDF o Excel, y proporcionamos tableros en tiempo real para métricas de nómina y KPIs.",
            isOpen: false
        }
    ];

    constructor(private intersectionObserver: IntersectionObserverService) { }

    ngOnInit() {
        this.intersectionObserver.observe('#faq .space-y-4', () => {
            this.isVisible = true;
        });
    }

    toggleFAQ(index: number) {
        this.faqs[index].isOpen = !this.faqs[index].isOpen;
    }
}
