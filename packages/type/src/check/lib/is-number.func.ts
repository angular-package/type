import { IsNumber } from '../type/is-number.type';
/**
 * Check is any `value` a `'number'` type.
 * Use `guardNumber()` function to type guard `number` also.
 * @param value Any value to check it is a `'number'` type.
 * @returns boolean
 * @example https://www.typescriptlang.org/play?jsx=0#code/MYewdgzgLgBAlhAcgVwLYCMCmAnGBeGACgDcBDAG2UwC4ZSwBPASlrMs3ghjDS1zwB8MKAwAOmEADMYbKvjwEA5Dww5FMAGQbOAMThg4UTCQpUmAbgBQoSLADKAFQBKASUQBxAPoA1AIIAZAFUAUXwYRX8QbExUeFEINAB+RSsbaBhEQIBZACFgpx8AkLCAJgB2VPB0nIB5Gv9g30RCoNCCSQoITErbGByXdzcHFuKCAE4ABgmygEYxsZKAVgAWMuWJ+ZmwHogQckwAOnIQAHNCAANHVw8R4POAGk4UVWxCK7cvP1amCxgAej+MA65C61iqe0OxzO50yuXytweT14OEIsLyBS+IR+5n+gKg2CoYMgEKOpwutXqjWamLujwQzz4hApDSat2xuKBnUwRN2+1J0P6g0QwxpiPpyNegqGbN+AM5IO5QA
 */
export const isNumber: IsNumber = (value: any): value is number => typeof value === 'number' && isFinite(value);
