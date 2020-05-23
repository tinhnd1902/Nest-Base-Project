import { getSomeMonthEndDate, getSomeMonthStartDate } from './dateUtil';

describe('dateUtil', () => {

  it('getSomeMonthStartDate', () => {
    const data = getSomeMonthStartDate();
    const dateNow = new Date();
    expect(dateNow.getFullYear()).toBe(data.getFullYear());
    expect(dateNow.getMonth()).toBe(data.getMonth());
    expect(data.getDate()).toBe(1);
  });

  it('getSomeMonthEndDate', () => {
    let lastDay = -1;
    const data = getSomeMonthEndDate();
    let days = [31, 28, 31, 30, 31, 30, 31, 30, 30, 31, 30, 31]
    if ((data.getFullYear() % 4 === 0) && (data.getFullYear() % 100 !== 0 || data.getFullYear() % 400 === 0)) {
      days[1] = 29;
    }
    lastDay = days[data.getMonth()];
    expect(lastDay).toBe(data.getDate());
  });
});