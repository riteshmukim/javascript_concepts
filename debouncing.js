// Debouncing in JS
let counter = 0;
const getData = () => {
  // call an API and gets Data
  console.log("Fetching Data ...", counter++);
};

const debouncedMethod = function (fn, delay) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(context, args), delay);
  };
};

const betterFn = debouncedMethod(getData, 300);
