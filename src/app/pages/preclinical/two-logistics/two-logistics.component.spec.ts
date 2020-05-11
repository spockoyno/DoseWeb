import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoLogisticsComponent } from './two-logistics.component';

describe('TwoLogisticsComponent', () => {
  let component: TwoLogisticsComponent;
  let fixture: ComponentFixture<TwoLogisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoLogisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
