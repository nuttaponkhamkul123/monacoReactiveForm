import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveMonacoComponent } from './reactive-monaco.component';

describe('ReactiveMonacoComponent', () => {
  let component: ReactiveMonacoComponent;
  let fixture: ComponentFixture<ReactiveMonacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveMonacoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveMonacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
