/* tslint:disable:no-unused-variable */

import { addYears } from 'date-fns';
import { DifferenceInMonthsPipe } from './difference-in-months.pipe';

describe('Pipe: DifferenceInMonths', () => {
  const pipe = new DifferenceInMonthsPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('is equal to 0', () => {
    expect(pipe.transform(new Date())).toBe(0);
  });

  it('is equal to 12', () => {
    expect(pipe.transform(addYears(new Date(), 1))).toBe(12);
  });
});
