
export function sortBy<T>(array: T[], prop: string, asc?: boolean): T[];
export function sortBy<T>(array: T[], predicate: (item: T) => any, asc?: boolean): T[]
export function sortBy<T>(array: T[], predicateOrProp: string | ((item: T) => any), asc: boolean = true): T[] {
  if(!array) return array;
  if(!predicateOrProp) return array.sort();
  let predicate = typeof predicateOrProp === "string" ? (item: T) => item[predicateOrProp] : predicateOrProp;
  return array.sort((a, b) => {
    let pa = predicate(a);
    let pb = predicate(b);

    if(pa > pb) return asc ? 1 : -1;
    else if(pb > pa) return asc? -1 : 1;
    else return 0;
  });
}
