import { Person } from "./Person.js";

export class Reference extends Person {
  constructor(props?: Partial<Reference>) {
    super(props);
  }

  position: string;
  business: string;
  active: boolean;
}
