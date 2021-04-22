import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaecherComponent } from './addFaecher.component';

describe('AddFaecherComponent', () => {
  let component: FaecherComponent;
  let fixture: ComponentFixture<FaecherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaecherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaecherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
