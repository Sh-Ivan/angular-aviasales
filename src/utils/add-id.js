import { nanoid } from "nanoid";

export const addId = (arr) => {
  const arrWithId = arr.map((el) => {
    if (id in el) return el;
    const id = nanoid();
    const elWithId = { ...el, id };
    return elWithId;
  });
  return arrWithId;
};
