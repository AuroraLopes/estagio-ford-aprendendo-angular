import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacotesMainComponentsComponent } from './pacotes-main-components.component';

describe('PacotesMainComponentsComponent', () => {
  let component: PacotesMainComponentsComponent;
  let fixture: ComponentFixture<PacotesMainComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacotesMainComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacotesMainComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
