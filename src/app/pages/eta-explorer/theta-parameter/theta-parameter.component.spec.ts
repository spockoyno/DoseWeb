import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThetaParameterComponent } from './theta-parameter.component';

describe('ThetaParameterComponent', () => {
  let component: ThetaParameterComponent;
  let fixture: ComponentFixture<ThetaParameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThetaParameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThetaParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
