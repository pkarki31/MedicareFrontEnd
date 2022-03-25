import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalorderpageComponent } from './finalorderpage.component';

describe('FinalorderpageComponent', () => {
  let component: FinalorderpageComponent;
  let fixture: ComponentFixture<FinalorderpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalorderpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalorderpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
