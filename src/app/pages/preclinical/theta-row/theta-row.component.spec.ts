import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThetaRowComponent } from './theta-row.component';

describe('ThetaRowComponent', () => {
  let component: ThetaRowComponent;
  let fixture: ComponentFixture<ThetaRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThetaRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThetaRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
