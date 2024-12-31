
const linkRecognitionReg = /\[(http[^\]]+)\]/gim;

export function autoLink(value: string) {
  return value.replace(linkRecognitionReg, `<a href="$1" target="_blank">$1</a>`);
}
