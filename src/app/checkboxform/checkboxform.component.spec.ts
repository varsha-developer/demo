import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxformComponent } from './checkboxform.component';

describe('CheckboxformComponent', () => {
  let component: CheckboxformComponent;
  let fixture: ComponentFixture<CheckboxformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxformComponent]
    });
    fixture = TestBed.createComponent(CheckboxformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
