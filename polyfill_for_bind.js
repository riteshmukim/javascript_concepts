let name = {
  firstName: "Ritesh",
  lastName: "Mukim",
};

let printName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + hometown + " " + state
  );
};

let printMyName = printName.bind(name, "Howrah");
printMyName("WB");

Function.prototype.mybind = function (...args) {
  let obj = this;
  const params = args.slice(1);
  return function (...extraArgs) {
    obj.call(args[0], ...params, ...extraArgs);
  };
};

let printMyName2 = printName.mybind(name, "Howrah");
printMyName2("WB");
