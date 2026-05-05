import { Person, type PersonConstructor } from "./utils/person.js";

type PersonConstructorParametersName =
  ConstructorParameters<PersonConstructor>[0];

export function createPerson(name: Person["name"], age: Person["age"]) {
  return new Person(name, age);
}

export function createIntern(name: PersonConstructorParametersName) {
  console.log(name);
}

console.log("hello");
