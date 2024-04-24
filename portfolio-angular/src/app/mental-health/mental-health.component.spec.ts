import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalHealthComponentComponent } from './mental-health.component';

describe('MentalHealthComponentComponent', () => {
  let component: MentalHealthComponentComponent;
  let fixture: ComponentFixture<MentalHealthComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentalHealthComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MentalHealthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
