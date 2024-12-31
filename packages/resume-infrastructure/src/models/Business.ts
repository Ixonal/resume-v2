
export class Business {
  constructor(props?: Partial<Business>) {
    if(props) Object.assign(this, props);
  }

  id: string;
  name: string;
  city: string;
  state: string;
}
