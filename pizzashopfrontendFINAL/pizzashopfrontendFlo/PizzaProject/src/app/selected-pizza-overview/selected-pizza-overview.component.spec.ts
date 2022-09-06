import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedPizzaOverviewComponent } from './selected-pizza-overview.component';

describe('SelectedPizzaOverviewComponent', () => {
  let component: SelectedPizzaOverviewComponent;
  let fixture: ComponentFixture<SelectedPizzaOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedPizzaOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedPizzaOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
