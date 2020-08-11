export const randomEmailId = (length: number) => {
  const randomStr = randomString(length);
  return `${randomStr}@abc.com`;
};

export const randomString = (length: number) => {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  return [...Array(length).keys()].map((i: number) => randChar(chars)).join("");
};

const randChar = (chars: string) => {
  const randNum = Math.floor(Math.random() * chars.length);
  return chars[randNum];
};
