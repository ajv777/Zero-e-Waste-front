import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosLimpiosComponent } from './puntos-limpios.component';

describe('PuntosLimpiosComponent', () => {
  let component: PuntosLimpiosComponent;
  let fixture: ComponentFixture<PuntosLimpiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntosLimpiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntosLimpiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
