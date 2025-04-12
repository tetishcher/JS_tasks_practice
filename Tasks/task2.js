export default function (arr, num = 0, condition = 'greater') {
    if (condition === 'greater') {
      return arr.filter(item => item > num);
    } else if (condition === 'less') {
      return arr.filter(item => item < num);
    } else {
      return [];
    }
  };