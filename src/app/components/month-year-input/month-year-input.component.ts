import { Component, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { addMonths, subMonths } from 'date-fns';
import { KeyboardKeys } from '../../enums/keyboard-keys.enum';
import { isNextMonth } from '../../utils/is-current-month';

@Component({
  selector: 'tha-month-year-input',
  template: `
    <button
      [disabled]="date | isNextMonth"
      class="fake-input__action"
      (click)="subtractMonth()"
    >
      <img class="caret-left" src="assets/caret.svg" alt="" />
    </button>
    <a class="fake-input__date" href="#">
      <span>{{ date | date: 'MMMM' }}</span>
      <span>{{ date | date: 'y' }}</span>
    </a>
    <button class="fake-input__action" (click)="addMonth()">
      <img class="caret-right" src="assets/caret.svg" alt="" />
    </button>
  `,
  styleUrls: ['./month-year-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MonthYearInputComponent,
      multi: true,
    },
  ],
})
export class MonthYearInputComponent implements ControlValueAccessor {
  date: Date = addMonths(new Date(), 1);
  touched = false;
  disabled = false;

  onChange = (date: Date) => {};

  onTouched = () => {};

  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    switch (event.key) {
      case KeyboardKeys.Left:
        if (isNextMonth(this.date)) {
          break;
        }

        this.subtractMonth();
        break;
      case KeyboardKeys.Right:
        this.addMonth();
        break;
      default:
        break;
    }
  }

  subtractMonth() {
    this.date = subMonths(this.date, 1);
    this.onChange(this.date);
  }

  addMonth() {
    this.date = addMonths(this.date, 1);
    this.onChange(this.date);
  }

  markAsTouched() {
    if (this.touched) {
      return;
    }

    this.onTouched();
    this.touched = true;
  }

  writeValue(date: Date) {
    this.date = date;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}
