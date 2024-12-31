
export class PersonalItem {
  constructor(props?: Partial<PersonalItem>) {
    if(props) Object.assign(this, props);
  }

  text: string;
}
