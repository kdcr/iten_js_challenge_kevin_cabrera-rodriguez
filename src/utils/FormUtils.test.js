import { checkDate, checkPersonName, checkClassroomName, checkEmail } from './FormUtils';

describe('form utils test suite', () => {
  it('checkPersonName correct name', () => {
    expect.assertions(1);
    expect(checkPersonName('Marc Rodríguez')).toBe(true);
  });

  it('checkPersonName incorrect name (number in the name)', () => {
    expect.assertions(1);
    expect(checkPersonName('Marc Rodríguez2')).toBe(false);
  });

  it('checkClassroomName valid classroom name', () => {
    expect.assertions(1);
    expect(checkClassroomName('Classroom 01')).toBe(true);
  });

  it('checkClassroomName invalid classroom name (Too long)', () => {
    expect.assertions(1);
    expect(checkClassroomName('Classroom 0123456789')).toBe(false);
  });

  it('checkDate correct date format 02-02-2022', () => {
    expect.assertions(1);
    expect(checkDate('02-02-2022')).toBe(true);
  });

  it('checkDate incorrect date format 2002-02-02', () => {
    expect.assertions(1);
    expect(checkDate('2002-02-02')).toBe(false);
  });

  it('checkDate incorrect date format', () => {
    expect.assertions(1);
    expect(checkDate('10-20-2022')).toBe(false);
  });

  it('checkDate empty string', () => {
    expect.assertions(1);
    expect(checkDate('')).toBe(true);
  });

  it('checkEmail correct email', () => {
    expect.assertions(1);
    expect(checkEmail('person@site.com')).toBe(true);
  });

  it('checkEmail incorrect email', () => {
    expect.assertions(1);
    expect(checkEmail('site.com')).toBe(false);
  });

  it('checkEmail empty string', () => {
    expect.assertions(1);
    expect(checkEmail('')).toBe(true);
  });
});
