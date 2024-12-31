
export class Person {
  constructor(props?: Partial<Person>) {
    if(props) Object.assign(this, props);
  }

  firstName: string;
  lastName: string;
  email: string;
  phone: number | string;
  city: string;
  state: string;

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

}
