import moment from "moment";

export function formatDate(date: string | Date | moment.Moment, format: string): string {
  if(!date) return "Present";

  if(date instanceof Date || typeof date === "string") date = moment(date);

  return date.format(format);
}
