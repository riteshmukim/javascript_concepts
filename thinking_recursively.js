let user = {
  name: "Ritesh",
  address: {
    personal: {
      city: "Howrah",
      area: "Salkia",
    },
    office: {
      city: "Bangalore",
      area: {
        landmark: "Novel Tech Park",
      },
    },
  },
};

let finalObj = {};

let flattenObject = (obj, parentKey) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      flattenObject(obj[key], parentKey + "_" + key);
    } else {
      finalObj[parentKey + "_" + key] = obj[key];
    }
  }
  return finalObj;
};

console.log(flattenObject(user, "user"));
