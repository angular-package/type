import { Constructor } from '../../type/constructor.type';
import { IsInstance } from '../type/is-instance.type';
import { isString } from './is-string.func';
import { isObject } from './is-object.func';
/**
 * Checks if any `value` is a generic `Obj` `constructor` instance and is `Object`.
 * @param value Any generic `Obj` type `value` instance to compare with `type` instance.
 * @param instance Creates generic `Obj` instance to compare with argument `value`.
 * @example https://www.typescriptlang.org/play?target=7&jsx=0#code/C4TwDgpgBAwg9gOwM7AE4FcDGw6oDwAq4EAfFALxQIQDuUAFAHTMCGqA5kgFxQsIgBtALoBKCmSKQA3AChQkKAEkki5MD6ZolPAHkARgCsS9AG4sANugg8+IADRQAlmo3XYiFBmy5dhkmPIyM0toRyQofQNZeWhlAGU0Z3YKBmCrG34AoIsrJ3DPJOjiJSRIiGwU3yNTHLdbBwBrCBAAfh4ChHYsqDTQ8MjZTA9gPITUJJ54xM6UmpCMkBEeXryoDuTAhhi4ADMe2opySgByOENy4GOoADJr-ZCnFwRNXYjzitv73OcUV1expJiAA+QKg2z2KyOJ3Wx0GwzyZWwk1K7xG2kixl6C0azTaa2mXWWBzCbwM4jBxFekKOUFOqKunxWP3Uzwgr0RI0ZBwAhDSEOhzOYoC1RgT6E1FsKoBLHl9oDw0LkeDsLEgIHC1HlVL9WcjtSzNJUMXN0rx+A5ma4ePA1F4cPgMUs5atIuSTaEni89pbWTc7mEAZ16D7NIwwKg4DgYowhrasPbGAgWABbCBiT5hDlVTG1EQiWQyTDmFhIcJxOCpmDF0tQADeUAAHikAIwAJgA7FIoABfQvV8IEGhwKsl8L1kApY4AGVwEGTTjASHQydhPZkMgA9BuoAA1NiOFh6cwQJCF+FxAgAJUUADkAOIAfR3AEEpwBVACik5nqDnC6XyYtLCZ6ajeb4ALIAEIfpeT6vp+KQdhqKBQJBOg6FOH7PjecHvl+lAquYarISMb43gAIh+ABit4fuRuGfg+BAAOo6Ck6AIAAJhAOzOBAnGyMepEUdRtH0S+eEkVAcQ6OBH4wFOz5xHEKTUHQ5aVv29D5iBKEsToClKSplBqVAg7DlpOm6XAx6MOYcDsMGKiehAeAaRAI6lsY+mGcpDjuZ5SB5l2W5QIRarWbZ9mOWE+quG5FYef2xgyXJvlxP5iWBcFUChYqECRRAdkOU5cWsglmmjt5rHpQ45nZfmuXbvlMhAA
 */
export const isInstance: IsInstance = <Obj>(value: any, instance: Constructor<Obj>): value is Obj =>
  (value instanceof instance && isString(instance.prototype.constructor.name) && isObject<Obj>(value));
