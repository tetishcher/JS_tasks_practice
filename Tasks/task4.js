const sumOfLen = (...args) => {
    return args.reduce((total, str) => {
      return total + str.length;
    }, 0);
  };
  
  export default sumOfLen;