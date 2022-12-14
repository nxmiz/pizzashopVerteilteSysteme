import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMainComponent } from './order-main.component';

describe('OrderMainComponent', () => {
  let component: OrderMainComponent;
  let fixture: ComponentFixture<OrderMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
