import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadradosMemoComponent } from './cuadrados-memo.component';

describe('CuadradosMemoComponent', () => {
  let component: CuadradosMemoComponent;
  let fixture: ComponentFixture<CuadradosMemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadradosMemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadradosMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
