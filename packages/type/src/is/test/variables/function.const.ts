import { Func } from '../../../type/func.type';
/**
 * typeof === 'function'
 * instanceof Function === true
 * instanceof Object === true
 * @example https://www.typescriptlang.org/play?target=7&jsx=0#code/C4TwDgpgBAYgrgOwMZQLxQBQDodgIYBOeAtgFxR4IgCUaAfBVQNwBQLSA9ggM7CwCqAOQDCAFQCSAeUHl4yNJgAe5BHGIAjCAQA0UEOV4EAlggDm1cpRD0oiqAGo9rTjw4AbCFjcdTGAAYwQmJSglCgkBwAZmio6ADkACQA3uEQUQIiEtIAvnF+utTOXNzunt6+AUFZoSa8lEhp0XJIwEZc+RnB0lC1wPWNsIgtbQjU7MWlXj7+gZkhPTx9yAOS6gBWEC0ds101i-3pqxstY0A
 */
export const FUNCTION: Func = (x: number, y: string): any => x + y;
