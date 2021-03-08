interface ObjectOne { x: number; }
interface ObjectTwo { x: string; y: number; }
/**
 * @example https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
 * @example https://www.typescriptlang.org/play?target=7&jsx=0#code/JYOwLgpgTgZghgYwgAgPICMBWEFlSFAb2QA8AuZEAVwFt1oBuZAXwChRJZEUNtcAVAO4B7ZMXLIAzmCigA5kwCeFanUYtWrBMJDS0AIQBSAUQDC-APqoAcsYq8ceAsgC8Y0hQDMABl8sGWjqSwgA2EAB0IcJyABQABqhGZpY2xshgigAOEMIwri5uAOQAJIQZ2bkGJuZWtsyFcQCUAdq6oRFRsQlJNanIoNJwIEiV+sLtQ3EANFXJtWkDYEMjeWMTIM2BbWGR0fGJ1Sm2-bpLwzl5AGJUw2DAOtOzvceLyxfI17f3Gy1B7btdA5zPqvc6Vay0ehQR5A54LU5vcGQ6CbVrBHadfY9I7wwZgvIOXAw7HzE54lZoLCOZrILbojp7bqHUmgikAZRk8mJzJBCPxyA5shAclRfwxjNhOLJZ3ZijooW5wJefNl8pCmzp-0xcSav1OT0s-AA6qh7FSBCJXO4JIV8CghKJ+AALKAQCCFGbKZAARl8fn8mvFgJJxtQ6Sy7wKRVK5XekosofqusDDODzND0sRq3GYUmM3jGdZ7zWuZ+KYBWPTJsz-M+uG+ipqhZV7zrdx0ou2qcrc2b5PeELU0PzIerRaRQ879IrTN7Y5blUJYEbhvn-cX5rANPL2oLa5l70FXJHVbD47yR+FU61EtHZ4XF7l6AVJ7n9-Xj7VGrRN66ybRYAGvMFi2EaVoEIIlJ8GAMTxqk15BvEbIAJoALL6KgAAyIEAKrocYABK4YVHkUbICUZQRouJKpCBxhGkmCHdrOcJ0WB57ICWEB5kBtGgTWFJcUMTEznBthsQJrY3PWDyvqx-EcW23wibuNHiQpD7IIOUIrsBGkflpyJQCpt48up9GSRu0G6XxFkcUu24-ohLE4hJHGXnINnmexmkeSZaZKsYbm+U+L68d5lmfs+6oBDujL-kEgF7qgEluBBUGOLBd7+T2TYmhJsaVGRFGFQSd5sYxerTqpp7BQZQkgLpoZ1Qeow5txZZOcxyUtVmHzSe2jVyauKX6a1VwDcpVW-rlI29fy2nQE1+VjX1i3GdNzk9at-JLsto12ZpDlMHFAV5QdPkGR5+3zeynJXpt3XlTtqrRTdL2HqFMWaEAA
 */
/**
 * typeof === 'object'
 * instanceof Boolean === false
 * instanceof Function === false
 * instanceof Number === false
 * instanceof Object === true
 * instanceof String === false
 * instanceof Symbol === false
 */
export const OBJECT_ONE: ObjectOne = { x: 3000 };

/**
 * typeof === 'object'
 * instanceof Boolean === false
 * instanceof Function === false
 * instanceof Number === false
 * instanceof Object === true
 * instanceof String === false
 * instanceof Symbol === false
 */
export const OBJECT_TWO: ObjectTwo = { x: 'One Two Three', y: 10000  };

/**
 * typeof === 'object'
 * instanceof Boolean === false
 * instanceof Function === false
 * instanceof Number === false
 * instanceof Object === true
 * instanceof String === false
 * instanceof Symbol === false
 */
export const OBJECT_ONE_NEW = new Object(OBJECT_ONE);

/**
 * typeof === 'object'
 * instanceof Boolean === false
 * instanceof Function === false
 * instanceof Number === false
 * instanceof Object === true
 * instanceof String === false
 * instanceof Symbol === false
 */
export const OBJECT_TWO_NEW = new Object(OBJECT_TWO);
