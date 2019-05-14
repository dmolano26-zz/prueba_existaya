import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquivalenciaComponentComponent } from './equivalencia-component.component';

describe('EquivalenciaComponentComponent', () => {
  let component: EquivalenciaComponentComponent;
  let fixture: ComponentFixture<EquivalenciaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquivalenciaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquivalenciaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
