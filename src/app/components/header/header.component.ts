import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Menu, X } from 'lucide-angular';
import { transitions } from '../../utils/tailwind-utils';
import { NavItem } from '../../models/nav-item-model';

@Component({
    selector: 'app-header',
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './header.component.html',
    styles: ``,
    standalone: true
})
export class HeaderComponent {
    isMenuOpen = false;

    // Iconos de Lucide
    menuIcon = Menu;
    xIcon = X;

    navItems: NavItem[] = [
        { name: 'Beneficios', href: '#benefits' },
        { name: 'Características', href: '#features' },
        { name: 'Cómo Funciona', href: '#how-it-works' },
        { name: 'Planes y Precios', href: '#pricing' },
        { name: 'Preguntas Frecuentes', href: '#faq' },
        { name: 'Contacto', href: '#contact' },
    ];

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
    }

    closeMenu(): void {
        this.isMenuOpen = false;
    }

    trackByName(index: number, item: NavItem): string {
        return item.name;
    }

    getNavLinkClasses(): string {
        return `text-[color:var(--foreground)]/70 hover:text-[color:var(--primary)] px-3 py-2 rounded-md ${transitions.default}`;
    }

    getMobileButtonClasses(): string {
        return `inline-flex items-center justify-center p-2 rounded-md text-[color:var(--foreground)]/70 hover:text-[color:var(--primary)] hover:bg-[color:var(--muted)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[color:var(--primary)] ${transitions.default}`;
    }

    getMobileNavLinkClasses(): string {
        return `text-[color:var(--foreground)]/70 hover:text-[color:var(--primary)] block px-3 py-2 rounded-md ${transitions.default}`;
    }

    logout(): void {
        // Lógica de cierre de sesión aquí
        console.log('Logout clicked');
    }
}