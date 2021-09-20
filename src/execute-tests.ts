export const tests = {
  /**
   * Switches for the `are` prefixed functions.
   */
  are: {
    bigint: { describe: false, it: false },
    boolean: { describe: false, it: false },
    date: { describe: false, it: false },
    defined: { describe: false, it: false },
    false: { describe: false, it: false },
    null: { describe: false, it: false },
    number: { describe: false, it: false },
    regexp: { describe: false, it: false },
    string: { describe: false, it: false },
    symbol: { describe: false, it: false },
    true: { describe: false, it: false },
  },
  object: {
    guard: { describe: false, it: false },
    is: { describe: false, it: false },
    isNot: { describe: false, it: false },
  },

  /**
   * Switches for the experimental.
   */
  experimental: {
    bigint: { describe: false, it: false },
    boolean: { describe: false, it: false },
    number: { describe: false, it: false },
    string: { describe: false, it: false },
    symbol: { describe: false, it: false },
  },

  /**
   * Switches for the `guard` prefixed functions.
   */
  guard: {
    bigint: { describe: false, it: false },
    boolean: { describe: false, it: false },
    class: { describe: false, it: false },
    date: { describe: false, it: false },
    defined: { describe: false, it: false },
    false: { describe: false, it: false },
    function: { describe: false, it: false },
    instance: { describe: false, it: false },
    key: { describe: false, it: false },
    null: { describe: false, it: false },
    number: { describe: false, it: false },
    numberBetween: { describe: false, it: false },
    object: { describe: false, it: false },
    objectKey: { describe: false, it: false },
    objectKeyIn: { describe: false, it: false },
    objectKeys: { describe: false, it: false },
    objectSomeKeys: { describe: false, it: false },
    primitive: { describe: false, it: false },
    regexp: { describe: false, it: false },
    string: { describe: false, it: false },
    stringLength: { describe: false, it: false },
    symbol: { describe: false, it: false },
    true: { describe: false, it: false },
    type: { describe: false, it: false },
    undefined: { describe: false, it: false },
  },

  /**
   * Switches for the `is` prefixed functions.
   */
  is: {
    array: { describe: false, it: false },
    bigint: { describe: false, it: false },
    boolean: { describe: false, it: false },
    booleanObject: { describe: false, it: false },
    booleanType: { describe: false, it: false },
    class: { describe: false, it: false },
    date: { describe: false, it: false },
    defined: { describe: false, it: false },
    false: { describe: false, it: false },
    function: { describe: false, it: false },
    instance: { describe: false, it: false },
    key: { describe: false, it: false },
    not: {
      boolean: { describe: false, it: false },
      defined: { describe: false, it: false },
      function: { describe: false, it: false },
      null: { describe: false, it: false },
      number: { describe: false, it: false },
      string: { describe: false, it: false },
      undefined: { describe: false, it: false },
    },
    null: { describe: false, it: false },
    number: { describe: false, it: false },
    numberBetween: { describe: false, it: false },
    numberObject: { describe: false, it: false },
    numberType: { describe: false, it: false },
    object: { describe: false, it: false },
    objectKey: { describe: false, it: false },
    objectKeyIn: { describe: false, it: false },
    objectKeys: { describe: false, it: false },
    param: { describe: false, it: false },
    primitive: { describe: false, it: false },
    regexp: { describe: false, it: false },
    string: { describe: false, it: false },
    stringIncludes: { describe: false, it: false },
    stringIncludesSome: { describe: false, it: false },
    stringLength: { describe: false, it: false },
    stringObject: { describe: false, it: false },
    stringType: { describe: false, it: false },
    symbol: { describe: false, it: false },
    true: { describe: false, it: false },
    type: { describe: false, it: false },
    undefined: { describe: false, it: false }
  },

  /**
   * Switches for the recognize.
   */
  recognize: {
    recognizeValue: { describe: false, it: false }
  },
};
