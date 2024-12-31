export function formatPhone(value: string | number) {
  value = "" + value;
  const length = value.length;

  switch(length) {
    case 12: //##-###-###-#### international number
    case 11: //#-###-###-####  possible international number
      return `${value.substring(0, length - 10)} (${value.substring(length - 10, length - 7)}) ${value.substring(length - 7, length - 4)}-${value.substring(length - 4)}`;
    case 10: //###-###-####    US number with area code
    case 9:  //##-###-####     malformed or unfinished US number with area code
    case 8:  //#-###-####      malformed or unfinished US number with area code
      return `(${value.substring(0, length - 7)}) ${value.substring(length - 7, length - 4)}-${value.substring(length - 4)}`;
    case 7:  //###-####        US number
    case 6:  //##-####         malformed or unfinished US number
    case 5:  //#-####          malformed or unfinished US number
      return `${value.substring(0, length - 4)}-${value.substring(length - 4)}`;
    default: //anything 4 digits or lower
      return value;
  }
}