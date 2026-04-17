// interface BasicAddress {
//   name?: string;
//   street: string;
//   city: string;
//   country: string;
//   postalCode: string;
// }

// // interface AddressWithUnit extends BasicAddress {
// //   unit: string;
// // }

// type AddressWithUnit = BasicAddress & { unit: string };

// const address: AddressWithUnit = {
//   street: "d",
//   city: "2",
//   country: "USA",
//   postalCode: "11",
//   unit: "2"
// };

// interface Colorful {
//   color: string;
// }

// interface Circle {
//   radius: number;
// }

// type ColorfulCircle = Colorful & Circle;
// // interface ColorfulCircle extends Colorful, Circle {}

// const cc: ColorfulCircle = {
//   color: "red",
//   radius: 12
// };

// function draw(circle: Colorful & Circle) {
//   console.log(`Color was ${circle.color}`);
//   console.log(`Radius was ${circle.radius}`);
// }

// draw({ color: "red", radius: 123 });

// interface Person1 {
//   name: string;
// }

// interface Person2 {
//   name: number;
// }

// type Staff = Person1 & Person2;
// declare const staffer: Staff;
// staffer.name;

// interface A {
//   name: string;
// }

// interface B extends A {
//   name: number;
// }

// interface Box {
//   contents: unknown;
// }

// const bx: Box = {
//   contents: "Hello"
// };

// if (typeof bx.contents === "string") {
//   console.log(bx.contents.length);
// }

// console.log((bx.contents as string).toLowerCase());

// interface StringBox {
//   contents: string;
// }

// interface NumberBox {
//   contents: number;
// }

// function setBox(box: StringBox, contents: string): void;
// function setBox(box: NumberBox, contents: number): void;
// function setBox(box: StringBox | NumberBox, contents: string | number) {
//   box.contents = contents;
// }
// setBox({ contents: "" }, "Hello");
// setBox({ contents: 0 }, 1);

// interface GenericBox<T> {
//   contents: T;
// }

// function setBoxGeneric<T>(box: GenericBox<T>, contents: T) {
//   box.contents = contents;
// }

// setBoxGeneric({ contents: "" }, "0");
// setBoxGeneric({ contents: 0 }, 1);

// function doSomething(arr: Array<string>) {
//   arr.forEach((ele) => {
//     console.log(ele.toLowerCase());
//   });
// }

// doSomething(["1", "2"]);
// doSomething(new Array("hello", "world"));

// function doStuff(values: readonly string[]): ReadonlyArray<string> {
//   console.log(values);
//   return values;
// }

// const a = doStuff(["helo", "world"]);
// a.push("1");

// let x: readonly string[] = [];
// x.push("f");
// let y: string[] = [];

// x = y;
// y = x;

// const a = [1, 2] as const;
// console.log(a);

// interface SquareConfig {
//   color?: string;
//   width?: number;
//   // [propName: string]: unknown;
// }

// let middle = {
//   colour: "red",
//   width: 100
// };

// function createSquare(config: SquareConfig): { color: string; area: number } {
//   return {
//     color: config.color || "red",
//     area: config.width ? config.width * config.width : 20
//   };
// }

// createSquare(middle);

// interface Person {
//   name: string;
//   age: number;
// }

// interface ReadonlyPerson {
//   readonly name: string;
//   readonly age: number;
// }

// const writablePerson: Person = {
//   name: "f",
//   age: 2
// };

// const p: ReadonlyPerson = writablePerson;
// writablePerson.age++;

const o = {
  name: "g",
  age: [2, 0] as const
};

type A = typeof o;
