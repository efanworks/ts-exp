declare global {
  interface MFEmployee {
    id: string;
    mount(root: string): void;
  }
  var mf_employee: MFEmployee;
}

export interface Person {
  name: string;
}

export {};
