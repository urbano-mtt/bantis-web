import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HeaderComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render the header element', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('header')).toBeTruthy();
    });

    it('should have a logo or title in the header', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const headerText = compiled.querySelector('header')?.textContent?.toLowerCase() || '';
        expect(headerText).toContain('bantis'); // Ajusta si el nombre visible es otro
    });

    it('should emit logout event when logout button is clicked', () => {
        spyOn(component, 'logout');
        const button = fixture.nativeElement.querySelector('.btn-logout');
        if (button) {
            button.click();
            expect(component.logout).toHaveBeenCalled();
        } else {
            // fallback to ensure test doesn't falsely pass
            fail('Logout button not found. Ensure it has class "btn-logout".');
        }
    });

    it('should contain navigation toggle button if exists', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        const navToggle = compiled.querySelector('.btn-toggle');
        expect(navToggle).toBeTruthy();
    });
});
