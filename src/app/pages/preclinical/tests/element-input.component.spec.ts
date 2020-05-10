import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ElementInputComponent} from '../element-input/element-input.component';

describe('ElementInputComponent', () => {
  let component: ElementInputComponent;
  let fixture: ComponentFixture<ElementInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
