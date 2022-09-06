import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaOverviewComponent } from './pizza-overview.component';

describe('PizzaOverviewComponent', () => {
  let component: PizzaOverviewComponent;
  let fixture: ComponentFixture<PizzaOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
