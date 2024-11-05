import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ObtenerCitaAleatoriaComponent } from './obtener-cita-aleatoria.component';

describe('ObtenerCitaAleatoriaComponent', () => {
  let component: ObtenerCitaAleatoriaComponent;
  let fixture: ComponentFixture<ObtenerCitaAleatoriaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ObtenerCitaAleatoriaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ObtenerCitaAleatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
