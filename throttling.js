const expensive = (...args) => console.log("Expensive fn", args);

const betterExpensive = throttle(expensive, 1000);

window.addEventListener("resize", betterExpensive);

const throttle = (fn, limit) => {
  let flag = true;
  return () => {
    let context = this,
      args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => (flag = true), limit);
    }
  };
};
