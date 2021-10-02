/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { addMonths } from 'date-fns';
import { DifferenceInMonthsPipe } from 'src/app/pipes/difference-in-months.pipe';
import { MonthlyDepositPreviewComponent } from './monthly-deposit-preview.component';

describe('MonthlyDepositPreviewComponent', () => {
  let component: MonthlyDepositPreviewComponent;
  let fixture: ComponentFixture<MonthlyDepositPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyDepositPreviewComponent, DifferenceInMonthsPipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyDepositPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show monthly amout as dollars', () => {
    component.amount = 25_000;
    component.reachDate = addMonths(new Date(), 5);
    fixture.detectChanges();

    const monthlyAmount = fixture.debugElement.query(
      By.css('.monthly-deposits span:last-child')
    ).nativeNode.textContent;

    expect(monthlyAmount).toEqual('$5,000');
  });

  it('use plural if date is over two months from now', () => {
    component.amount = 25_000;
    component.reachDate = addMonths(new Date(), 5);
    fixture.detectChanges();

    const text = fixture.debugElement.query(
      By.css('.monthly-deposits-help-text p strong:first-of-type')
    ).nativeNode.textContent;

    expect(text).toEqual('5 monthly deposits');
  });
});
