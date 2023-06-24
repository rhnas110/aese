export const censor = (str, num) => {
  if (str?.length > num)
    return str.slice(0, num) + "..." + getLastFourLetters(str);
  return str;
};

function getLastFourLetters(str) {
  return str.slice(str.length - 4, str.length);
}
