import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KappaInputComponent } from './kappa-input.component';

describe('KappaInputComponent', () => {
  let component: KappaInputComponent;
  let fixture: ComponentFixture<KappaInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KappaInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KappaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
