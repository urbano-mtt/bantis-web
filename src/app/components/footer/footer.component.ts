import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollAnimationComponent } from '../../comon-components/scroll-animation/scroll-animation.component';
import { SocialLink } from '../../models/social-link.model';
import { IntersectionObserverService } from '../../services/intersection-observer.service';

@Component({
    selector: 'app-footer',
    imports: [CommonModule, ScrollAnimationComponent],
    templateUrl: './footer.component.html',
    styles: ``
})
export class FooterComponent {
    isVisible = false;
    isBottomVisible = false;

    navigation = {
        product: [
            { name: "Características", href: "#features" },
            { name: "Cómo Funciona", href: "#how-it-works" },
            { name: "Beneficios", href: "#benefits" },
            { name: "Precios", href: "#pricing" },
        ],
        support: [
            { name: "Documentación", href: "#" },
            { name: "Centro de Ayuda", href: "#" },
            { name: "Contactar Soporte", href: "#contact" },
            { name: "Estado", href: "#" },
        ],
        company: [
            { name: "Acerca de", href: "#" },
            { name: "Carreras", href: "#" },
            { name: "Noticias", href: "#" },
            { name: "Socios", href: "#" },
        ],
        legal: [
            { name: "Política de Privacidad", href: "#" },
            { name: "Términos de Servicio", href: "#" },
            { name: "Política de Cookies", href: "#" },
            { name: "Protección de Datos", href: "#" },
        ],
    };

    socialLinks: SocialLink[] = [
        { icon: "facebook", href: "#", label: "Facebook" },
        { icon: "twitter", href: "#", label: "Twitter" },
        { icon: "linkedin", href: "#", label: "LinkedIn" },
        { icon: "instagram", href: "#", label: "Instagram" },
    ];

    bottomLinks = ["Seguridad", "Cumplimiento", "Accesibilidad", "Mapa del Sitio"];

    constructor(private intersectionObserver: IntersectionObserverService) { }

    ngOnInit() {
        this.intersectionObserver.observe('footer .grid', () => {
            this.isVisible = true;
            setTimeout(() => {
                this.isBottomVisible = true;
            }, 500);
        });
    }
}
