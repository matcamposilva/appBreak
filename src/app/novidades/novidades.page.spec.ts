import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovidadesPage } from './novidades.page';

describe('NovidadesPage', () => {
  let component: NovidadesPage;
  let fixture: ComponentFixture<NovidadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovidadesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
