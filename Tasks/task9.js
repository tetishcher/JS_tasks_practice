export default function combineFunctions(...functions) {
    return function(x) {
      return functions.reduce((value, fun) => fun(value), x);
    };
  }