export default function combineArray(arr1, arr2) {
    return [...arr1, ...arr2].filter((el) => {
      return typeof el === 'number';
    });
  }