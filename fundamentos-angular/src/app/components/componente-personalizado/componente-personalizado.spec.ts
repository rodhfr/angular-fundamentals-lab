import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePersonalizado } from './componente-personalizado';

describe('ComponentePersonalizado', () => {
  let component: ComponentePersonalizado;
  let fixture: ComponentFixture<ComponentePersonalizado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentePersonalizado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentePersonalizado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
