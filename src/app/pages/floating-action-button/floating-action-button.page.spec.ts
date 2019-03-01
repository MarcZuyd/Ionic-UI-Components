import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingActionButtonPage } from './floating-action-button.page';

describe('FloatingActionButtonPage', () => {
  let component: FloatingActionButtonPage;
  let fixture: ComponentFixture<FloatingActionButtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingActionButtonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingActionButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
