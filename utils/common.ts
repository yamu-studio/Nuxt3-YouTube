export const commonCutText = function (text: string, len: number) {
  if (len < text.length) {
    return text.substring(0, len) + '...'
  } else {
    return text
  }
}
