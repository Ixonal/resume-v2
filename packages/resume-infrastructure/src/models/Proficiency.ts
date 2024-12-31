
export class Proficiency {
  constructor(props?: Partial<Proficiency>) {
    if(props) Object.assign(this, props);
  }

  name: string;
  level: string;
  description: string;
}
