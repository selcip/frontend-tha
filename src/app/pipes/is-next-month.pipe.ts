import { Pipe, PipeTransform } from '@angular/core';
import { isNextMonth } from '../utils/is-next-month';

@Pipe({
  name: 'isNextMonth',
})
export class IsNextMonthPipe implements PipeTransform {
  transform(value: Date): boolean {
    return isNextMonth(value);
  }
}
