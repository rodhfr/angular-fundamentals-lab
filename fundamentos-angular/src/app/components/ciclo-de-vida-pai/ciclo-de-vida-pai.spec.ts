import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloDeVidaPai } from './ciclo-de-vida-pai';

describe('CicloDeVidaPai', () => {
  let component: CicloDeVidaPai;
  let fixture: ComponentFixture<CicloDeVidaPai>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CicloDeVidaPai]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CicloDeVidaPai);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
