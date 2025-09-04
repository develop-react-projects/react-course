import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with only one param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional classes', () => {
    const additionalClasses = 'someClass one two three';
    expect(classNames('someClass', {}, ['one', 'two', 'three'])).toBe(additionalClasses);
  });

  test('with mods', () => {
    const additionalClasses = 'someClass one two three scrollable';
    expect(classNames('someClass', { scrollable: true, selected: false }, ['one', 'two', 'three'])).toBe(additionalClasses);
  });

  test('with mods undefined', () => {
    const additionalClasses = 'someClass one two three scrollable';
    expect(classNames('someClass', { scrollable: true, selected: undefined }, ['one', 'two', 'three'])).toBe(additionalClasses);
  });
});
