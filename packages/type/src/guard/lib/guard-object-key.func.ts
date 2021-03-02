import { isString } from '../../check/lib/is-string.func';
import { guardObject } from './guard-object.func';
/**
 * Guard the `object` to be generic `Obj` type and guard by finding `property` in the `object`.
 * Use `isObject()` function for check ONLY.
 * @param object Generic `Obj` type value to guard and to find `key` value in.
 * @param key Value to find in `object`.
 * @returns boolean
 * @example https://www.typescriptlang.org/play?jsx=0#code/MYewdgzgLgBAlhAylATnMBzGBeGAKANwEMAbAVwFMAuGIsATwEobjyL4IZo1McA+GFHoAHCiABmMVpRzZcAcm7oM8gNwAoUJFgYyRFABMA8gCMAVhWCxcAHlNm+hUpRr3mU5+wQx7-QSLFJaXY5BRBzSyh5GAAyGI82eG06YECfCKsNLWgYXX1jDKgAaQp6HBg7cwAaGBKyigAPKAowA04Aa1KJdIc8cIsrV2qYTvoaOvd+yI4e-nUYXL1De0jK3qmrRhgAfg5kHgw8Ua3d0aSYDdgaVBkacVIICiySIghOIzAKAGEXt5gAbxgDXKAEZVDAyrgAEzggC+MGysCMADkAKIAfS+ABkAIKIRDlT4Adx8nx+rwgeEYzwpMAAKkSQOS-oDIYIUJQ4QjwDk6QB1IyY3H4wkUEkMpm-SnU9ToZooe6pHqRD7sQENGhgMgAWxMFBQ4LGMC1uv1cPBiJ8ACEAFKor509Eo1FDAZQVXldU0ACsNSNUIA7DBYRo5frFewVlYJQCIZqdXqDcGLTykbb7Y7+UZXZEY7hWT7k5oeSASBQAHQkECHAAGAHElgZSd8pQBtegAXRgRLgUAAFj40UK8Yh2x2azU8stCnU7GSpTV5PR5I5ncP8Yvl4xqTAAPS79mUcswVEEfX0fvKGbidAV4uQUsVqu1hv5ZvMiBj7u9gdZ9ejzsJ0WfIo2KUo5xbClNxXPA-2xEdoO3cF93pAJgMMd8pW7EAUHaCBjy+PtLHabDcPww872yR9K2rPB60bTCKVbAAvLse37QcMXg-ExyAqcCjdWdVQ-RdmJgtduMQRCdxQuk0P4xi-mEFAQFEFAhFIvCCKI4ASMZMjjxuSiSzLGiXwY4S21Y78OIk4VR1YvjG1AoT5ygmB5AacSh0k0T5CQvcDzk0R0KbSzaX0rSYEI4jNPI+4SEect7wgajnzo18MNA1VWwaNif2tO0HSdNFcvHSdnJncDss+RcvNXdNiudOr-Jkg9T3PS9eG8G9PkMjljIfUz0vot8aooFj8tsxrMwFXiKpAqr6DWFVao8sSGqK2ajGk5CgvkhjlNU-UNMi8iYt0uL+qPdQgA
 */
export const guardObjectKey = <Obj, Key extends keyof Obj>(object: Obj, key: Key): object is Obj =>
  guardObject<Obj>(object) ? isString(key) ? key in object : true : false;
