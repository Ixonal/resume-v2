import { Person } from "./Person.js";

export class Subject extends Person {
  constructor(props?: Partial<Subject>) {
    super(props);
  }

  address: string;
  description: string;
}
