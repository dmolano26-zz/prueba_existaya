import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramasComponentComponent } from './programas-component.component';

describe('ProgramasComponentComponent', () => {
  let component: ProgramasComponentComponent;
  let fixture: ComponentFixture<ProgramasComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramasComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
