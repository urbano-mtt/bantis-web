import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface InViewOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class IntersectionObserverService implements OnDestroy {
    private observers: Map<Element, IntersectionObserver> = new Map();
    private subjects: Map<Element, BehaviorSubject<boolean>> = new Map();

    observeElement(element: Element, options: InViewOptions = {}): Observable<boolean> {
        const {
            threshold = 0.1,
            rootMargin = '0px 0px -10% 0px',
            triggerOnce = true
        } = options;

        // Si ya existe un observable para este elemento, lo retornamos
        if (this.subjects.has(element)) {
            return this.subjects.get(element)!.asObservable();
        }

        // Crear nuevo BehaviorSubject
        const subject = new BehaviorSubject<boolean>(false);
        this.subjects.set(element, subject);

        // Crear nuevo observer
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    subject.next(true);
                    if (triggerOnce) {
                        this.unobserveElement(element);
                    }
                } else if (!triggerOnce) {
                    subject.next(false);
                }
            },
            { threshold, rootMargin }
        );

        // Guardar observer y comenzar observación
        this.observers.set(element, observer);
        observer.observe(element);

        return subject.asObservable();
    }

    // Función simple para observar elementos por selector y ejecutar callback
    observe(selector: string, callback: () => void, options: InViewOptions = {}): void {
        // Usar setTimeout para asegurarse de que el DOM esté renderizado
        setTimeout(() => {
            const element = document.querySelector(selector);
            if (element) {
                const {
                    threshold = 0.1,
                    rootMargin = '0px 0px -10% 0px'
                } = options;

                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            callback();
                            observer.disconnect(); // Desconectar después del primer trigger
                        }
                    },
                    { threshold, rootMargin }
                );

                observer.observe(element);
            }
        }, 100);
    }

    unobserveElement(element: Element): void {
        const observer = this.observers.get(element);
        if (observer) {
            observer.disconnect();
            this.observers.delete(element);
        }

        const subject = this.subjects.get(element);
        if (subject) {
            subject.complete();
            this.subjects.delete(element);
        }
    }

    ngOnDestroy(): void {
        // Limpiar todos los observers al destruir el servicio
        this.observers.forEach(observer => observer.disconnect());
        this.subjects.forEach(subject => subject.complete());
        this.observers.clear();
        this.subjects.clear();
    }
}