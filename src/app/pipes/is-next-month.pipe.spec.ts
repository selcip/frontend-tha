/* tslint:disable:no-unused-variable */

import { addMonths } from 'date-fns';
import { IsNextMonthPipe } from './is-next-month.pipe';

describe('Pipe: IsNextMonth', () => {
  const pipe = new IsNextMonthPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns true for a month from ', () => {
    expect(pipe.transform(addMonths(new Date(), 1))).toBeTrue();
  });

  it('returns false for current date', () => {
    expect(pipe.transform(new Date())).toBeFalse();
  });
});
