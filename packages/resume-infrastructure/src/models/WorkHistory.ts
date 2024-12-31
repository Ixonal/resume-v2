import moment from "moment";

export class WorkHistory {
  constructor(props?: Partial<WorkHistory>) {
    if(props) Object.assign(this, props);

    if(this.start) this.start = moment(this.start);
    if(this.end) this.end = moment(this.end);
  }

  business: string;
  description: string;
  start: string | moment.Moment;
  end: string | moment.Moment;
  title: string;
  type: "work" | "project";
  isActive: boolean;
}
