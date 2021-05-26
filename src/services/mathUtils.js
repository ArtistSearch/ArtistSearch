export const songLengthConversion = (lengthInMs) => {
  const rawSeconds = lengthInMs / 1000;
  const minutes = Math.floor(rawSeconds / 60);
  const remainderSeconds = Math.floor(rawSeconds - minutes * 60);
  return `(${minutes}:${remainderSeconds})`;
};
