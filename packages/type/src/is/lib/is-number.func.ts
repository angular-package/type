import { IsNumber } from '../type/is-number.type';
/**
 * Checks if any `value` is a `'number'` type or instance of `Number` and `Object`.
 * Use the `guardNumber()` function to type-guard `number` also.
 * @param value Any value to check if it's a `'number'` type.
 * @returns boolean
 * @example https://www.typescriptlang.org/play?target=7&jsx=0#code/C4TwDgpgBAkgzgOQK4FsBGEBOUC8UAUAbgIYA2SEAXFMQHYgCUuAfFCedAJZxS2oaYA3ACgAxgHtacYFG7J0WavHkDcBdhWp1G1DVx58F2HM2FQooSOIBmbMhVw48AckMDnUAPyy4AMU60nMAQRPYQTLphslLAdKIQNlAqWFAAZKl2HNHScQm2APJoAFYQosAiEjFQAEIwAOIwCAAqagCcAAztAOwAjK2tAEwArAAsXSPt-T20FZLSNfn5ADIAogCCCGrWZHAQs1UIAKoAstUrAEpqA13780enFwD6jQDKTRsAwitqtBAA7kl+Fh8EMGLcZG9zo06mpnEtxJgIChZGA4KhPM5buJSBAAHSkcQAc3wAANag1miSADQ+ZKYfDkxpNBhgqAAejZUG2pF2Yjm2LxBOJZMWqw21NpQPp1VF6wQLME7M53N5lTgAvxRNJ9zO5wlcil+B1FwVSosmAofKkGqF2pOuueCDenxW+sQhuN50dzoQX1NHPNlrVNq1JMh0LddPw4YQdX9yp2EGEwiAA
 */
export const isNumber: IsNumber = (value: any): value is number =>
  typeof value === 'number' ? isFinite(value) : value instanceof Number && value instanceof Object;
