export const truncate = (str, no_sentences) => {
  return str.split(' .').splice(0, no_sentences).join('.')
}
