import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeCustomizado } from './pipe-customizado';

describe('PipeCustomizado', () => {
  let component: PipeCustomizado;
  let fixture: ComponentFixture<PipeCustomizado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeCustomizado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeCustomizado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
