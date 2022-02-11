import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HightlightsCardComponent } from './hightlights-card.component';

describe('HightlightsCardComponent', () => {
  let component: HightlightsCardComponent;
  let fixture: ComponentFixture<HightlightsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HightlightsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HightlightsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
