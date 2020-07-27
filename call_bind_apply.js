let name = {
  firstName: "Ritesh",
  lastName: "Mukim",
};

const printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + ", " + state
  );
};

printFullName.call(name, "Howrah", "WB");

let name2 = {
  firstName: "Rajendra",
  lastName: "Mukim",
};

// function borrowing
printFullName.call(name2, "Singhana", "RJ");

printFullName.apply(name2, ["Singhana", "RJ"]);

// bind method
let printDadsName = printFullName.bind(name2, "Singhana", "RJ");
console.log(printDadsName);

printDadsName();
