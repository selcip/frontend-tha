/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SavingGoalFormComponent } from './saving-goal-form.component';

describe('SavingGoalFormComponent', () => {
  let component: SavingGoalFormComponent;
  let fixture: ComponentFixture<SavingGoalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SavingGoalFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingGoalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
