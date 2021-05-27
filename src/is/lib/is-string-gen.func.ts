
function* isStringGenerator(value: any): Generator {
  yield typeOf(value) === 'string';
  yield isStringType(value);
  yield isStringObject(value);
}

function isStringChecks(value: any, callback: any) {
  const gen: Generator = isStringGenerator(value);
  for (const val of gen) {
    callback(gen);
  }
}
