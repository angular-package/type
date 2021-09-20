/**
 * Represents a callback function with parameters, the `value` that has been checked, the `result` of this check, and an optional
 * `payload`.
 * @var Value A generic type variable `Value` by default equal to `any` determines the type of the `value` parameter.
 * @var Payload The shape of the optional `payload` parameter, by default equal to the `object`.
 * @param result The result of the check of a `boolean` type.
 * @param value The value that has been checked of a generic type variable `Value`.
 * @param payload An optional `object` of a generic type variable `Payload` to provide more data.
 * @returns The return value is a `boolean`.
 */
 export type ResultCallback<Value = any, Payload = object> = (
  result: boolean,
  value: Value,
  payload?: Payload
) => boolean;
