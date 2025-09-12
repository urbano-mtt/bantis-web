/**
 * Tailwind V4 Utility Classes and Design System Helpers
 * 
 * Este archivo centraliza las clases comunes de Tailwind V4 
 * para mantener consistencia en todo el proyecto Angular.
 */

// Clases de color para texto
export const textColors = {
    primary: 'text-[color:var(--primary)]',
    secondary: 'text-[color:var(--secondary)]',
    muted: 'text-[color:var(--muted-foreground)]',
    foreground: 'text-[color:var(--foreground)]',
    accent: 'text-[color:var(--accent-foreground)]',
    destructive: 'text-[color:var(--destructive)]',
} as const;

// Clases de color para fondos
export const backgroundColors = {
    primary: 'bg-[color:var(--primary)]',
    secondary: 'bg-[color:var(--secondary)]',
    muted: 'bg-[color:var(--muted)]',
    background: 'bg-[color:var(--background)]',
    card: 'bg-[color:var(--card)]',
    accent: 'bg-[color:var(--accent)]',
    destructive: 'bg-[color:var(--destructive)]',
} as const;

// Clases de gradientes usando variables CSS
export const gradients = {
    primary: 'bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--primary)]/80',
    secondary: 'bg-gradient-to-r from-[color:var(--secondary)] to-[color:var(--secondary)]/80',
    radial: 'bg-gradient-radial from-[color:var(--primary)]/20 to-transparent',
    hero: 'bg-gradient-to-br from-[color:var(--primary)]/5 via-transparent to-[color:var(--secondary)]/5',
} as const;

// Clases de border y radius
export const borders = {
    default: 'border border-[color:var(--border)]',
    muted: 'border border-[color:var(--border)]/50',
    primary: 'border border-[color:var(--primary)]',
    radius: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        full: 'rounded-full',
    }
} as const;

// Clases de sombras
export const shadows = {
    sm: 'shadow-sm',
    default: 'shadow',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
} as const;

// Clases de spacing comunes
export const spacing = {
    section: 'py-20 px-4 sm:px-6 lg:px-8',
    container: 'max-w-7xl mx-auto',
    cardPadding: 'p-6',
    buttonPadding: 'px-8 py-4',
} as const;

// Transiciones comunes
export const transitions = {
    default: 'transition-colors duration-200',
    transform: 'transition-transform duration-200',
    all: 'transition-all duration-200',
    smooth: 'transition-all duration-300 ease-in-out',
} as const;

// Utilidad para combinar clases de manera segura
export function cn(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ');
}

// Clases de animación personalizadas (usando las definidas en globals.css)
export const animations = {
    float: 'animate-float',
    floatDelayed: 'animate-float-delayed',
    pulseSubtle: 'animate-pulse-subtle',
    floatComplex: 'animate-float-complex'
} as const;

// Utilidades de hover comunes
export const hovers = {
    scale: 'hover:scale-105',
    scaleSmall: 'hover:scale-102',
    opacity: 'hover:opacity-80',
    brightness: 'hover:brightness-110',
} as const;