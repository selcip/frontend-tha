import { Pipe, PipeTransform } from '@angular/core';
import { isNextMonth } from '../utils/is-current-month';

@Pipe({
  name: 'isNextMonth',
})
export class IsNextMonthPipe implements PipeTransform {
  transform(value: Date): boolean {
    return isNextMonth(value);
  }
}
