import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonacoTab2Component } from './monaco-tab2.component';

describe('MonacoTab2Component', () => {
  let component: MonacoTab2Component;
  let fixture: ComponentFixture<MonacoTab2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonacoTab2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonacoTab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
