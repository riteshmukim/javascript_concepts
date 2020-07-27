let arr = ["Ritesh", "Nisha"];
let object = {
  name: "Ritesh",
  city: "Howrah",
  getIntro: () => console.log(this.name + " from " + this.city),
};

let object2 = {
  name: "Aditya",
};

// never do this
object2.__proto__ = object;
