import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsPageComponent } from './suggestions-page.component';

describe('SuggestionsPageComponent', () => {
  let component: SuggestionsPageComponent;
  let fixture: ComponentFixture<SuggestionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestionsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuggestionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
