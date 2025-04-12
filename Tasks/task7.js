export function factorial(n) {
    if (n < 0) {
      return -1;
    }
    if (n == 0 || n == 1) {
      return 1;
    }
    return factorial(n - 1) * n;
  }
  
  export default function processArray(arr, factorial) {
    return arr.map((elem) => factorial(elem));
  }