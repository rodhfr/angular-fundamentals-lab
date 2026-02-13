import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderizandoListas } from './renderizando-listas';

describe('RenderizandoListas', () => {
  let component: RenderizandoListas;
  let fixture: ComponentFixture<RenderizandoListas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenderizandoListas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderizandoListas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
