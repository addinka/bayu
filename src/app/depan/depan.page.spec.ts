import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepanPage } from './depan.page';

describe('DepanPage', () => {
  let component: DepanPage;
  let fixture: ComponentFixture<DepanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
