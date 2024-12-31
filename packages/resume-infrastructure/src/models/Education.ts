import moment from "moment";

export class Education {
  constructor(props?: Partial<Education>) {
    if(props) Object.assign(this, props);

    if(typeof this.graduationDate === "string") this.graduationDate = moment(this.graduationDate);
  }

  institutionName: string;
  city: string;
  state: string;
  degreeType: string;
  degreeFocus: string;
  graduationDate: moment.Moment;
}
