export const arraysHaveMatch = (sourceArray: Array<string>, targetArray: Array<string>) => {
  return sourceArray.some((element) => targetArray.includes(element));
};
