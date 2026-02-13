import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploServicos1 } from './exemplo-servicos1';

describe('ExemploServicos1', () => {
  let component: ExemploServicos1;
  let fixture: ComponentFixture<ExemploServicos1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemploServicos1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploServicos1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
