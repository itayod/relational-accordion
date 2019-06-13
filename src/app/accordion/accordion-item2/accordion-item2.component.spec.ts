import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionItem2Component } from './accordion-item2.component';

describe('AccordionItem2Component', () => {
  let component: AccordionItem2Component;
  let fixture: ComponentFixture<AccordionItem2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionItem2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
