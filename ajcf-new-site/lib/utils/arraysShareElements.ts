export const arraysShareElements = <T>(array1: T[], array2: T[]) => {
  return array1.some((element) => array2.includes(element));
};
