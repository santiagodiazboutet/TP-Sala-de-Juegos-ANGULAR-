import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroMemoComponent } from './tablero-memo.component';

describe('TableroMemoComponent', () => {
  let component: TableroMemoComponent;
  let fixture: ComponentFixture<TableroMemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableroMemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableroMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
