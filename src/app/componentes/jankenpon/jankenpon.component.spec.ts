import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JankenponComponent } from './jankenpon.component';

describe('JankenponComponent', () => {
  let component: JankenponComponent;
  let fixture: ComponentFixture<JankenponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JankenponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JankenponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
