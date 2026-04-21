let result = myLib.makeGreeting("hello, world");
console.log("The computed greeting is:" + result);
let count = myLib.numberOfGreetings;

myLib.makeGreeting("er");

let x: Widget = getWidget(43);
let arr: Widget[] = getWidget("all of them");

greet({
  greeting: "hello world",
  duration: 4000
});

function getGreeting() {
  return "howdy";
}

class MyGreeter extends Greeter {}

greetCommon("hello");
greetCommon(getGreeting);
greetCommon(new MyGreeter());

const g = new Greetering("Hello");
g.log({ verbose: true });
g.alert({ modal: false, title: "Current Greeting" });

const myGreeter = new Greeted("hello, world");
myGreeter.greeting = "howdy";
myGreeter.showGreeting();

class SpecialGreeter extends Greeted {
  constructor() {
    super("Very special greetings");
  }
  say() {
    console.log(this.greeting);
  }
}

new SpecialGreeter().showGreeting();

console.log("Half the number of widgets is " + foo / 2);

baby("hello, world");
