import { Constructor } from '../../type/constructor.type';
import { IsClass } from '../type/is-class.type';
import { isString } from './is-string.func';
/**
 * Checks if any `value` is a generic `Obj` type instance by comparing with `type` argument.
 * @param value Any generic type value instance to compare with `type` instance.
 * @param type Creates new instance `Obj` type to compare with argument `value`.
 * @example https://www.typescriptlang.org/play?jsx=0#code/C4TwDgpgBAwg9gOwM7AE4FcDGw6oDwAq4EAfFALxQIQDuUAFAHTMCGqA5kgFxQsIgBtALoBKCmSKQA3AChQkKAEkkMADYskSClDwB5AEYArEvQBuLVegg8+IADRR512IhQZsuPUZJjyZc5bQAJZaBoaymK7AUCEAymhBCOzaZhZWNvwiPAFWMVpuicl+UDnByMB8mBBwAGZQ8aiFUAA+zY7EtSVp0OS9UADkBUn9EVF5ahrcSirqmtpexqmBGfbtkDzw5e44+GE+2d15UGHiXYEx5ZXVdU5QAGR3eQ2F9E6MYKhwOG+RW1g7jAQLAAthARLIZJhZlpYnBQRM5gBvKAAD20AEYAEwAdikUAAvpDoVACDQ4AitMiQNp+gAZXAQYExMBIdDAkYEmQyAD03KgADU2EEWPpVBAkJCxrECAAlRQAOQA4gB9fkAQVpAFUAKI0+moRnM1nAgD8I0l5Sg8s1AFkAELamWqjU67Q40aWu26XS07Vq+XOrW6yg1CxICAelBQTXygAi2oAYgrtbHAzrlQQAOq6bToBAAEwgNUSEHzsjF0Rj8aT8pTae1keisV0Nu1MFpatisW01DosPh0Po4ItUazunbne7lF7JLJFKHEN+SDgYsYqjg7HoIQpeH7EApJjHE67Dj3FJE4KgvKgodU4ZHK4ga43W5mk13cP30JMzdbx9ip6fuel7XmgVgPqu66btu0IfgOkyHtm-4OKS5LQheeKgRgEBckAA
 */
export const isClass: IsClass = <Obj>(value: any, type: Constructor<Obj>): value is Obj =>
  value instanceof type && isString(type.prototype.constructor.name);
