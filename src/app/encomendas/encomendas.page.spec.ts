import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncomendasPage } from './encomendas.page';

describe('EncomendasPage', () => {
  let component: EncomendasPage;
  let fixture: ComponentFixture<EncomendasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncomendasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncomendasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
