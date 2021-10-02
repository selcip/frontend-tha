import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { addMonths, differenceInMonths, format } from 'date-fns';
import { KeyboardKeys } from 'src/app/enums/keyboard-keys.enum';
import { IsNextMonthPipe } from 'src/app/pipes/is-next-month.pipe';
import { MonthYearInputComponent } from './month-year-input.component';

describe('MonthYearInputComponent', () => {
  let component: MonthYearInputComponent;
  let fixture: ComponentFixture<MonthYearInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonthYearInputComponent, IsNextMonthPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(MonthYearInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show date as month and year (October2021)', () => {
    const dateText =
      format(component.date, 'MMMM') + format(component.date, 'y');

    const dateSpanText = fixture.debugElement
      .queryAll(By.css('.fake-input__date span'))
      .reduce((acc, cur) => acc + cur.nativeElement.textContent, '');

    expect(dateSpanText).toEqual(dateText);
  });

  it('should disable left button if date is next month', () => {
    component.date = addMonths(new Date(), 1);
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('button'));

    expect(buttons[0].nativeNode.disabled).toBeTrue();
  });

  it('should enable left button if date is over 2 months from now', () => {
    component.date = addMonths(new Date(), 5);
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('button'));

    expect(buttons[0].nativeNode.disabled).toBeFalse();
  });

  it('should increase the date by one month on right keypress', () => {
    const keyEvent = new KeyboardEvent('keyup', {
      key: KeyboardKeys.Right,
    });
    let currentDate = component.date;

    fixture.nativeElement.dispatchEvent(keyEvent);
    fixture.detectChanges();
    expect(differenceInMonths(component.date, currentDate)).toBe(1);
  });

  it('should decrease the date by one month on left keypress', () => {
    const keyEvent = new KeyboardEvent('keyup', {
      key: KeyboardKeys.Left,
    });
    component.date = addMonths(component.date, 3);
    let currentDate = component.date;

    fixture.nativeElement.dispatchEvent(keyEvent);
    fixture.detectChanges();

    expect(differenceInMonths(component.date, currentDate)).toBe(-1);
  });

  it('should increase the date by one month on right button click', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    let currentDate = component.date;

    buttons[1].nativeElement.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();
    expect(differenceInMonths(component.date, currentDate)).toBe(1);
  });

  it('should decrease the date by one month on left button click', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    component.date = addMonths(component.date, 3);
    fixture.detectChanges();

    let currentDate = component.date;

    buttons[0].nativeElement.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();

    expect(differenceInMonths(component.date, currentDate)).toBe(-1);
  });
});
