export default function overloadedFunc(
    arg1 = [1, 2, 3],
    arg2 = 2,
    arg3 = function (arg1, arg2) {
      return arg1 * arg2;
    }
  ) {
    if (typeof arguments[0] === 'undefined') {
      return arg1.map((el) => arg3(el, arg2));
    } else if (typeof arguments[0] === 'object') {
      return arguments[0].map((el) => arg3(el, arg2));
    } else if (typeof arguments[0] === 'number') {
      return arg3(arg1, arg2);
    }
  }