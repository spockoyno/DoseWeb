import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreclinicalComponent } from '../preclinical.component';

describe('PreclinicalComponent', () => {
  let component: PreclinicalComponent;
  let fixture: ComponentFixture<PreclinicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreclinicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreclinicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
