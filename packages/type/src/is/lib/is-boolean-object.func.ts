export const isBooleanObject = (value: any) =>
  typeof value === 'object' &&
  value instanceof Boolean === true &&
  value instanceof Object === true;
