import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundElementsComponent } from './background-elements.component';

describe('BackgroundElementsComponent', () => {
  let component: BackgroundElementsComponent;
  let fixture: ComponentFixture<BackgroundElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundElementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
