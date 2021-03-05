import { IsBigInt } from '../type/is-big-int.type';
/**
 * Check if any `value` is a `'bigint'` type.
 * Use the `guardBigInt()` function to type-guard `bigint` also.
 * @param value Any value to check if it's a `'bigint'` type.
 * @returns boolean
 * @example https://www.typescriptlang.org/play?jsx=0#code/MYewdgzgLgBAlhAcgVwLYCMCmAnGBeGACgDcBDAG2UwC4ZSwBPASlrMs3ghjDS1zwB8MKAwAOmEADMYbKvjwEA5Dww5FMAGQbOAMThg4UTCQpUmAbgBQoSLADKAFQBKASUQBxAPoA1AIIAZAFUAUXwYRX8QbExUeFEINAB+RSsbaBhEQIBZACFgpx8AkLCAJgB2VPB0nIB5Gv9g30RCoNCCSQoITErbGByXdzcHFuKCAE4ABgmygEYxsZKAVgAWMuWJ+ZmwHogQckwAOnIQAHNCAANHVw8R4POAGk4UVWxCK7cvP1amCxgAej+MA65C61iqe0OxzO50yuXytweT14OEIsLyBS+IR+5n+gKg2CoYMgEKOpwutXqjWamLujwQzz4hApDSat2xuKBnUwRN2+1J0P6g0QwxpiPpyNegqGbN+AM5IO5QA
 */
export const isBigInt: IsBigInt = (value: any): value is bigint => typeof value === 'bigint';
