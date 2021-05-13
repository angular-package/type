import { is } from '../lib/is.object';

// Example usage with the problem
interface Config {
  a?: string;
  b?: string;
}
const config: Config = {
  a: 'x',
  b: 'y'
};

function configFunction(value: string): string {
  return '';
}

// Cause typescript returns `boolean` this will generate a type error
if (is.not.undefined(config.a)) {
  configFunction(config.a);
}

// Cause typescript return `value is undefined` will not generate an error
if (!is.undefined(config.a)) {
  configFunction(config.a);
}
