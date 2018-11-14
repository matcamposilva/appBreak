import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartilhePage } from './compartilhe.page';

describe('CompartilhePage', () => {
  let component: CompartilhePage;
  let fixture: ComponentFixture<CompartilhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompartilhePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompartilhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
