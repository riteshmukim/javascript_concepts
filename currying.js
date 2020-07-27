let multiply = function (x, y) {
  console.log(x, y, x * y);
};

let multiplyByTwo = multiply.bind(this, 2);

multiplyByTwo(5);

let multiplyArrow = (x, y) => console.log(x, y, x * y);

let multiplyByThree = multiplyArrow.bind(this, 3);

multiplyByThree(5);

// With closures
let multiplyClosure = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyByFour = multiplyClosure(4);

multiplyByFour(5);
