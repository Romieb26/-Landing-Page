import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardmemesComponent } from './cardmemes.component';

describe('CardmemesComponent', () => {
  let component: CardmemesComponent;
  let fixture: ComponentFixture<CardmemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardmemesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardmemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
