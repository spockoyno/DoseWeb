import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtaExplorerComponent } from '../eta-explorer.component';

describe('EtaExplorerComponent', () => {
  let component: EtaExplorerComponent;
  let fixture: ComponentFixture<EtaExplorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtaExplorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtaExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
