declare namespace myLib {
  function makeGreeting(arg: string): string;
  let numberOfGreetings: number;
}

interface GreetSettings {
  greeting: string;
  duration?: number;
  color?: string;
}

declare function greet(settings: GreetSettings): void;

declare class Greeter {}
type GreetingLike = string | (() => string) | Greeter;
declare function greetCommon(arg: GreetingLike): void;

declare namespace GreeteringLib {
  interface LogOptions {
    verbose: boolean;
  }
  interface AlertOptions {
    modal: boolean;
    title: string;
  }
}

declare class Greetering {
  constructor(content: string);
  log(arg: GreeteringLib.LogOptions): void;
  alert(arg: GreeteringLib.AlertOptions): void;
}

declare class Greeted {
  constructor(content: string);
  greeting: string;
  showGreeting(): void;
}

declare var foo: number;
declare function baby(content: string): void;
