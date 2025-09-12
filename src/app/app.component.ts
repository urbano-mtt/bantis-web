import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { FeaturesComponent } from './components/features/features.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { FaqComponent } from './components/faq/faq.component';
import { CtaComponent } from './components/cta/cta.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        HeaderComponent,
        HeroComponent,
        BenefitsComponent,
        HowItWorksComponent,
        FeaturesComponent,
        PricingComponent,
        FaqComponent,
        CtaComponent,
        ContactComponent,
        FooterComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'bantis-web';
}
