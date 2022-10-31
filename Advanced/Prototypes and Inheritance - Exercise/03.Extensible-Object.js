function extensibleObject() {
  return {
    extend(template) {
      Object.keys(template).forEach((key) => {
        if (typeof template[key] === "function") {
          Object.getPrototypeOf(this)[key] = template[key];
        }
        this[key] = template[key];
      });
    },
  };
}
const myObj = extensibleObject();
const template = {
  extensionMethod: function () {},
  extensionProperty: "someString",
};

//test
myObj.extend(template);
console.log(myObj);
