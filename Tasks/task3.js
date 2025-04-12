const maxInterv = (...args) => {
    if (args.length < 2) return 0;
    let interval = 0;
    for (let i = 1; i < args.length; i++) {
      const diff = Math.abs(args[i] - args[i - 1]);
      if (diff > interval) interval = diff;
    }
    return interval;
  };
  export default maxInterv;