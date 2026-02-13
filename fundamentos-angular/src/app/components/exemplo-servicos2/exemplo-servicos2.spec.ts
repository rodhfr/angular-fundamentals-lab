import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploServicos2 } from './exemplo-servicos2';

describe('ExemploServicos2', () => {
  let component: ExemploServicos2;
  let fixture: ComponentFixture<ExemploServicos2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemploServicos2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploServicos2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
