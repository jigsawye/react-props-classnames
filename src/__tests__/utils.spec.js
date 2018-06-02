import { isBool, isString, isEmptyArray } from '../utils';

describe('utils', () => {
  it('should be export isBool, isString and isEmptyArray', () => {
    expect(isBool).toBeDefined();
    expect(isString).toBeDefined();
    expect(isEmptyArray).toBeDefined();
  });
});
