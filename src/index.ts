import { Person, type PersonConstructor } from "./utils/person";

type PersonConstructorParametersName =
  ConstructorParameters<PersonConstructor>[0];

export function createPerson(name: Person["name"], age: Person["age"]) {
  return new Person(name, age);
}

export function createIntern(name: PersonConstructorParametersName) {
  console.log(name);
}

export interface Student {
  name: string;
  age: number;
  score: number;
}

const stu: Student = {
  name: "fg",
  age: 10,
  score: 100,
};

console.log(stu, "hello");
