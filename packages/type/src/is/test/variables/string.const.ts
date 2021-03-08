/**
 * @example https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 * @example https://www.typescriptlang.org/play?target=7&jsx=0#code/MYewdgzgLgBAygFQEoEkByBxAXDAhmATxgF4YByAQgAEBiAEgFIA9AMgCoAKASlwCNgAJgFMAZgHMAFgEsAVgGsANgFswIAA4AnaAFcA7gQBeZANwAoUJBAKhAOgUgxHAAaJUmGFAJqhIESWKkZHQA3p7evvDI6BgAvmROXGYWEFa29o4uUe5SkFD4wD5+AGLaYMBQUuBOADSRbhgwOdD5hTAlZRXgiebgKdZ2Ds6u0Y25LREA8rwyQuU1dSNNeWWtUzPliTA9lv3pQ1kNS+N+cFAaOWLzw9ljKxGn52Bi3dt9aYNOCUm9sNcYAProRAAQTQAGEAKI4fBEUgPC4cP7dZKpAYZP6AtAg8EQjxeVoBQIhMKtDFAhCgyFxL6vVF7TL1THYyGjZp3YqlcqVMBXA5Mik41nLAoRdpcrrfHbvdF88mU3FHdkwNazKC8xlywWKkV+FUbSVvNH7DVYgUs7Wks4XdXRfnyoXHeBWp4vFG7D405K-PloCEAdTtOOhhBIMDAQl0TsejiRBrpHwxvoDmpZJIihPIxPx9x9-sDVPiyN68ZljKT+YVtx1bU5nR5tUTeZTlbZ1bFdaLUqNDNt5ebDqVerVDdzydN9otk2mqs7hvpjbHzJbwst0ZtmH+ffHWqrq4u3SAA
 */
/**
 * typeof === 'string'
 * instanceof Function === false
 * instanceof Object === false
 * instanceof String === false
 */
export const STRING: any = '!@#$%^&*()abcdefghijklmnoprstuwyz';

/**
 * typeof === 'string'
 * instanceof Function === false
 * instanceof Object === false
 * instanceof String === false
 */
export const STRING_INSTANCE: any = String(STRING);

/**
 * typeof === 'string'
 * instanceof Function === false
 * instanceof Object === true
 * instanceof String === true
 */
export const STRING_NEW_INSTANCE: any = new String(STRING);
