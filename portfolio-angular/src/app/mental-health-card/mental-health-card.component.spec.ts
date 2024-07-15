import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalHealthCardComponent } from './mental-health-card.component';

describe('MentalHealthCardComponent', () => {
  let component: MentalHealthCardComponent;
  let fixture: ComponentFixture<MentalHealthCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentalHealthCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MentalHealthCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
