export const isBooleanType = (value: any) =>
  value instanceof Boolean === false &&
  value instanceof Object === false &&
  typeof value === 'boolean' &&
  (value === true || value === false);
