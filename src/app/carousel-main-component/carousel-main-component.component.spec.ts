import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMainComponentComponent } from './carousel-main-component.component';

describe('CarouselMainComponentComponent', () => {
  let component: CarouselMainComponentComponent;
  let fixture: ComponentFixture<CarouselMainComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselMainComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
