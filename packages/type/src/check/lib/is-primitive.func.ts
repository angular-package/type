import { Primitives } from '../../lib/primitives.type';
/**
 * Check is any `value` a generic `Type` type from one of the `Primitives`.
 * Use `guardPrimitive()` function to type guard generic `Type` `value` also.
 * @param value Any value to check it is a generic `Type` from the `type`.
 * @param type One of the `Primitives` `'boolean'`, `'bigint'`, `'number'`, `'string'` type to check `value`.
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBACgTgSwLYOAgbhAzlAvFAcgCMB7EgGwgEMA7AqAH0KIQHMEbh6mCaBXJEQhxuhLMEQ1WBANwAoAMYka4qAizxkqDNHwAeACrgIAPgAU6KuT4QAXFFogANFFCQA-Pc0o0mLAEp7S2todSgjSDwTV2MSADMoYJs8XHw3CHklFWAoACEAeXyAGQBRAEEAOQB9ADUyooBVErwoOKssDMVlVVyASQBxXoqDWvqmloBOAAYpgHYARgmJgCYAVgAWWfWppfmaTO6cioaAWVySgCVRxub8eeXZg+yoAGUDC6H+6-H8AhOQKD8QTCNRYWRdFQUCAAOnIJFYZgABgViuVqnUboiXOpvNpMHpSFDaOYUaVKt8Si5iGRKLQCP5-DIoAB6ZmuOA2CFYKGw+FIvqDYYUrGg3G+CAEtgcYAkgZDEYYppUljsTj0xkstkSTlZbmUXkIxHHM6XYXYjSIHw6PRAoRwczG85XRWUwi24Tqpms9k67o8uGGt4fCpfF0inGWvES8SSVjmIOfClUmMcaQMr1ajkQLn+vnIwpk9FjErhi1acUEmnUGjx96Jl3Kqt09Oa1rtbO63OGgXys2iyMVlXSh2nJ1J5hStUt71tcgdHP6gNIx2msPmsXW932swJkPj3gCO2e1uz+edxd53eh4uljf4lNSEcm53F5MSVPHmftuRAA
 */
export const isPrimitive = <Type>(value: any, type: Primitives): value is Type => typeof value === type;
