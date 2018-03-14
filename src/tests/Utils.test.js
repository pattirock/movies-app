import { toTitleCase, getYear } from '../assets/javascripts/utils';

test('the year should be 2018', () => {
  expect(getYear('01-02-2018')).toBe(2018);
});

test('the date is empty', () => {
  expect(getYear('')).toBe('');
});

test('the date is a number', () => {
  expect(getYear(2018)).toBe(2018);
});

test('the title should be "The Title"', () => {
  expect(toTitleCase('the_title')).toBe('The Title');
});

test('the title should be "Thetitle"', () => {
  expect(toTitleCase('thetitle')).toBe('Thetitle');
});

test('the title should be "The-title"', () => {
  expect(toTitleCase('the-title')).toBe('The-title');
});
