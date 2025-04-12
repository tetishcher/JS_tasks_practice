export const upperCase = (str) => str.toUpperCase();
export const tripleExclaim = (str) => str + '!!!';
export const split = (seperator) => (str) => str.split(seperator);
export const join = (seperator) => (arr) => arr.join(seperator);
export const copy = (str) => str + ' ' + str;

const createComposition =
  (...array) =>
  (data) => {
    return array.reduce((prev, current) => {
      return current(prev);
    }, data);
  };

export default createComposition;