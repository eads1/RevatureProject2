import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificpostComponent } from './specificpost.component';

describe('SpecificpostComponent', () => {
  let component: SpecificpostComponent;
  let fixture: ComponentFixture<SpecificpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
