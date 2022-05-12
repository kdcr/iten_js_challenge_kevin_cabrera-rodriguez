import { checkDate, checkPersonName, checkClassroomName, checkEmail } from './FormUtils';

test('Test checkPersonName correct name', () => {
  expect(checkPersonName('Marc Rodríguez')).toBe(true);
});

test('Test checkPersonName incorrect name (number in the name)', () => {
  expect(checkPersonName('Marc Rodríguez2')).toBe(false);
});

test('Test checkClassroomName valid classroom name', () => {
  expect(checkClassroomName('Classroom 01')).toBe(true);
});

test('Test checkClassroomName invalid classroom name (Too long)', () => {
  expect(checkClassroomName('Classroom 0123456789')).toBe(false);
});

test('Test checkDate correct date format 02-02-2022', () => {
  expect(checkDate('02-02-2022')).toBe(true);
});

test('Test checkDate incorrect date format 2002-02-02', () => {
  expect(checkDate('2002-02-02')).toBe(false);
});

test('Test checkDate incorrect date format', () => {
  expect(checkDate('10-20-2022')).toBe(false);
});

test('Test checkDate empty string', () => {
  expect(checkDate('')).toBe(true);
});

test('Test checkEmail correct email', () => {
  expect(checkEmail('person@site.com')).toBe(true);
});

test('Test checkEmail incorrect email', () => {
  expect(checkEmail('site.com')).toBe(false);
});

test('Test checkEmail empty string', () => {
  expect(checkEmail('')).toBe(true);
});
