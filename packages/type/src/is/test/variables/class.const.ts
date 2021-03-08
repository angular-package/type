import { STRING } from './string.const';
/**
 * @example https://www.typescriptlang.org/play?target=7&jsx=0#code/MYGwhgzhAEDC5WgbwFDWgD2gXmgVgG41oBPHaAAwEIABAYgBIBSAPQDIAqACgEowAjYABMApgDMA5gAsAlgCsA1iAC2AOwD2ABwBOEAC4BXAO4kAXhSIBfFMHWqI6kCIB0IdRK4V4kGHpKaRdTEcbFwGJD8AoLgECEsKHiJbe0cXNw8vWOgZez0wVWBA4O8oCgAaGJ9s3PzC6JKIRJs7BydXd08G6v1aougAMQMCvRk7csrEHJ6CvsHh0dUm5Na0jsyqqbyZ6IB5fjkRYD1xrs3e3f3DvSbmlLb0zwSklr04ABkAQQBlL4B9AEkAHJfAAqH0BsAAogAuaD5Mi4VQiIwTCC8AjQAD0mOgkT6oVwAHJ1JcjoTbit2hlYJ8fgDgWCIZDcf58aFoOE8fVaX8gaDwVD4ksWqkqZ0efT+Uzuls6sVYicJXzGVCZed5T5hXdVtSlQyBcyzttgnMjgtFd9efrpUa5QMhma7FrKQ8vHqparbX09gcjha6cqDWrjdAfVcmkA
 */

/**
 * typeof === 'function'
 * instanceof Class === false
 * instanceof Function === true
 * instanceof Object === true
 */
export class Class {
  x = 5;
  y = STRING;
}

/**
 * typeof === 'object'
 * instanceof Class === true
 * instanceof Function === false
 * instanceof Object === true
 */
export const CLASS = new Class();
