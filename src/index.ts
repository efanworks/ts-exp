import type { Person, PersonConstructor } from "./utils/person";

type PersonConstructorParametersName =
  ConstructorParameters<PersonConstructor>[0];

export function createPerson(
  Ctor: PersonConstructor,
  name: Person["name"],
  age: Person["age"],
) {
  return new Ctor(name, age);
}

export function createIntern(name: PersonConstructorParametersName) {
  console.log(name);
}
