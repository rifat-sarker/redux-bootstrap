import { produce } from "immer";

const person = {
  name: "Rifat Sarker",
  address: { district: "Tangail", city: "Dhaka" },
};

// const person2 = person;
// person2.name = "Jony"

// const person2 = {...person, name: "Jony"}

// const person2 = {...person.address, city: "Rajshahi"}
const person2 = produce(person, (draft) => {
  draft.name = "Jony";
});
// console.log(person);
// console.log(person2);

// for avoiding mutation we use immer, behind the scene it gives us unmutated data
// we will not use .dot notation

// currying function

// regular function
// const add = (a,b) => a + b;

// currying function
// const add = (a) => (b) => a + b;

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const buyClothes = (discount) => (totalPrice) =>
  totalPrice - totalPrice * discount;
const withDiscount = buyClothes(0.3);
console.log(withDiscount(100));
console.log(withDiscount(200));
console.log(withDiscount(300));
