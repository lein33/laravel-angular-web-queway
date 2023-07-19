import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcontactoComponent } from './newcontacto.component';

describe('NewcontactoComponent', () => {
  let component: NewcontactoComponent;
  let fixture: ComponentFixture<NewcontactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewcontactoComponent]
    });
    fixture = TestBed.createComponent(NewcontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
