export const isBool = value => typeof value === 'boolean';

export const isString = value => typeof value === 'string';

export const isEmptyArray = value =>
  typeof Array.isArray(value) && value.length === 0;
