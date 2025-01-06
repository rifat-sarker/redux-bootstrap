import { produce } from "immer";

const person = {
  name: "Rifat Sarker",
  address: { district: "Tangail", city: "Dhaka" },
};

// const person2 = person;
// person2.name = "Jony"

// const person2 = {...person, name: "Jony"}

// const person2 = {...person.address, city: "Rajshahi"}
const person2 = produce(person, (draft => {
    draft.name = "Jony"
}));
console.log(person);
console.log(person2);


// for avoiding mutation we use immer, behind the scene it gives us unmutated data
// we will not use .dot notation