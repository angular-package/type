import { isObject } from '../../check/lib/is-object.func';
/**
 * Guard the `obj` value to be generic object `Obj`.
 * Use `isObject()` function for check ONLY.
 * @param object Generic `Obj` type value to guard.
 * @returns boolean
 * @example https://www.typescriptlang.org/play?jsx=0#code/MYewdgzgLgBAlhAylATnMBzGBeGAKANwEMAbAVwFMAuGIsATwEobjyL4IZo1McA+GFHoAHCiABmMVpRzZcAcm7oM8gNwAoUJFgIA8gCMAVhWCxcAHgOG+hUpRp16AGhgBrCvQD8NJZmZS7dgQYK35BETFJaXY5BRAjEyh5GAAyFIC2eG06YEiQhNMYTw5kHgw8dyYitw8sjJkaVAaYcVIICg0taBgMMiIUABMrRJwYSyMbeONTGit-KZHg0OwBPQKoces8BdNGDU1wboAhXV0AGQBRAEEAOQB9ADUrs4BVC9Gmjs0SIghOXTAFAAwj8-jAAN4wAAeowAjKoYABfGBdWC6G4XO5As5XRCIUaAgDuIUBIN+EDwe2+5JgABVCSAyWDIfQPihKAjkai6QB1XRYnF4gkUYn0xmgilU9BQCgoVq5fLTKAA9iQqE0MBkAC2+llnIR3N0RwAUhcgbS7uiLrN1irRmqaABWJEaaWy+XsYamMUQmD0DXa3UofUow5ok1mi20vk2pU+3Asp0u9QHSAgEgUAB0JBA5QABidztd7k9Xhc8y5ev0hutLKSJTZC5dbo9nm9GHsYAB6LstNpZ1MQdNZnP5gDifUGdIZTIgFZ6k5rSvMYtnNitAtxiA7CJ7C+rMAZKFcEAAhIJ2ewKAQKGB4JIq1OjyfM4Ph9nc3g8xODyrZ-PHyXRI62BBs8GjflsS3Hdu17QDDxAY8zwvGRr1ve99yfRCXzfDMP3zVcJQAxcvQ2QjyRsCDNzxGC90+V8unfUcv1IlViOrUjNkSFV1wjc1LQxWje3o3CR0-b9F0VRIxXYwZONIsVeNNfirSEzCBgQpDz0+GA0LvOAH0k58IFfIA
 */
export const guardObject = <Obj>(object: Obj): object is Obj => isObject<Obj>(object);
