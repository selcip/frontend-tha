import { Pipe, PipeTransform } from '@angular/core';
import { differenceInCalendarMonths } from 'date-fns';

@Pipe({
  name: 'differenceFromTodayInMonths',
})
export class DifferenceInMonthsPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return differenceInCalendarMonths(value, new Date());
  }
}
