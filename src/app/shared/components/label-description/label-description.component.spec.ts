import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelDescriptionComponent } from './label-description.component';

describe('LabelDescriptionComponent', () => {
  let component: LabelDescriptionComponent;
  let fixture: ComponentFixture<LabelDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
