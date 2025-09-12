import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollAnimationComponent } from '../../comon-components/scroll-animation/scroll-animation.component';
import { BackgroundElementsComponent } from '../../comon-components/background-elements/background-elements.component';
import { ContactInfo } from '../../models/contact-info.model';
import { SocialLink } from '../../models/social-link.model';
import { IntersectionObserverService } from '../../services/intersection-observer.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    imports: [CommonModule, ScrollAnimationComponent, BackgroundElementsComponent, FormsModule],
    templateUrl: './contact.component.html',
    styles: ``
})
export class ContactComponent {
    isVisible = false;
    isFormVisible = false;

    formData = {
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: ''
    };

    contactInfo: ContactInfo[] = [
        {
            icon: "phone",
            title: "Teléfono",
            value: "+52 (55) 1234-5678",
            link: "tel:+525512345678"
        },
        {
            icon: "message",
            title: "WhatsApp",
            value: "+52 (55) 1234-5678",
            link: "https://wa.me/525512345678"
        },
        {
            icon: "mail",
            title: "Email",
            value: "contacto@bantis.com",
            link: "mailto:contacto@bantis.com"
        },
        {
            icon: "mappin",
            title: "Dirección",
            value: "Av. Empresarial 123, Suite 100\nCiudad de México, CDMX 01234",
            link: "https://maps.google.com"
        }
    ];

    socialLinks: SocialLink[] = [
        { icon: "facebook", href: "#", label: "Facebook" },
        { icon: "twitter", href: "#", label: "Twitter" },
        { icon: "linkedin", href: "#", label: "LinkedIn" },
        { icon: "instagram", href: "#", label: "Instagram" }
    ];

    constructor(private intersectionObserver: IntersectionObserverService) { }

    ngOnInit() {
        this.intersectionObserver.observe('#contact .grid', () => {
            this.isVisible = true;
            setTimeout(() => {
                this.isFormVisible = true;
            }, 300);
        });
    }

    onSubmit(event: Event) {
        event.preventDefault();
        console.log('Form submitted:', this.formData);
        // Handle form submission here
    }
}
