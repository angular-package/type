import { isString } from '../../check/lib/is-string.func';
import { guardObject } from './guard-object.func';
/**
 * Guard the `object` to be generic `Obj` type and guard by finding `property` in the `object`.
 * Use `isObject()` function for check ONLY.
 * @param object Generic `Obj` type value to guard and to find `key` value in.
 * @param key Value to find in `object`.
 * @returns boolean
 * @example https://www.typescriptlang.org/play?jsx=0#code/MYewdgzgLgBAlhAylATnMBzGBeGAKANwEMAbAVwFMAuGIsATwEobjyL4IZo1McA+GFHoAHCiABmMVpRzZcAcm7oM8gNwAoUJFgIA8gCMAVhWCxcAHgOG+hUpRp16AGhgBrCvQD8NJZmZS7dgQYK35BETFJaXY5BRAjEyh5GAAyFIC2eG06YEiQhNMYTw5kHgw8dyYitw8sjJkaVAaYcVIICg0taBgMMiIUABMrRJwYSyMbeONTGit-KZHg0OwBPQKoces8BdNGTvBu3v6h9YBpWosrF3P6GAoADygKMAHOSol8rZ2oWaMXSpoN3m6w4n346hgPT6g2Gpk2k3WjGqCFKygqHiRxUqdW+MEaKGarRI7U6JCIEE4ujAFAAwmSKTAAN4we6jACMqhgt1wACZOQBfGBdWC6AByAFEAPo0gAyAEFEIhRtSAO4hal08kQPB7TT0zgAFRVIE1DOZ3MEBI6MEFwpgBoA6rppfLFcqKGqjSb9TqNOgnihWrlPokqexmfcaGAyABbfQUFCc+hR2PxxM2zl23QAIQAUuKaQbJWLxb9plAw6MIzQAKwuZMwHkAdgz6n9CaD7FhUC9TK5KbjCYFmYOIrzBaLjt0ZcSvdw5trra6IBIFAAdCQQOUAAYAcWhA3VtP1AG16ABdGAquBQAAWIQlLoViDP5+3LiOMLOHksGv1Lnkeh5BsEsn0VACgMYPYYAAehgy1KDXGBxQIBN6DvZRQXEdB100A4V3XTcd33Y4j1NCBXyvG97ynMCXwvd8oWObsbl-Y8tQg4C8Fo2Vn04qDOTg+0IiYwYyP1K8QBQVwICQmlbxMVxJOk2SENw5dVw3Lc8D3A9xK1E8AC9L2vO8HylXjFVfRjPxOctWLDciAMMrjQMsxB+OgoSDRE2z9IZYQUBAUQUCEZSZLkhTgCU40VKQpp1PwzSiJ0kixMc09jKosy3NdF9jJsg8WJ-DKOJgeR7lcx93Oc+QBNg+CfNEUTD1KhlYoimB5MU8LVKJdo1zwyACK04i9O7MMT3uEzqJCcdC2LCUprfD8iu-ehNlDakAMqkD5qLEsdrqrz4JQtCMN4YJsOpeKrUGjTCO03TSIm6kjJmnL9slKdrNW5j1s20ww1qvb8wWqdPMExrfL0wLgoTMKOtU7rot627EPUIA
 */
export const guardObjectKey = <Obj, Key extends keyof Obj>(object: Obj, key: Key): object is Obj =>
  guardObject<Obj>(object) ? isString(key) ? key in object : true : false;
