import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animations } from '../../utils/tailwind-utils';


export type BackgroundVariant = 'hero' | 'features' | 'pricing' | 'cta' | 'contact' | 'geometric';
export type BackgroundIntensity = 'subtle' | 'moderate' | 'strong';

@Component({
    selector: 'app-background-elements',
    imports: [CommonModule],
    templateUrl: './background-elements.component.html',
    styles: ``
})
export class BackgroundElementsComponent {
    @Input() variant: BackgroundVariant = 'hero';
    @Input() intensity: BackgroundIntensity = 'subtle';

    // Hacer accesible las animaciones en el template
    animations = animations;

    get opacityLevel(): number {
        return this.intensity === 'subtle' ? 0.03 : 0.06;
    }


    getGradientClasses(): string {
        const baseClasses = 'absolute inset-0';

        switch (this.variant) {
            case 'hero':
                return `${baseClasses} bg-gradient-to-br from-[color:var(--primary)]/5 via-transparent to-[color:var(--secondary)]/5`;
            case 'features':
                return `${baseClasses} bg-gradient-to-r from-gray-50/50 to-transparent`;
            case 'pricing':
                return `${baseClasses} bg-gradient-to-br from-white/80 to-gray-50/40`;
            case 'cta':
                return `${baseClasses} bg-gradient-to-b from-transparent to-gray-50/20`;
            default:
                return `${baseClasses} bg-gradient-to-r from-gray-50/30 to-transparent`;
        }
    }
}
