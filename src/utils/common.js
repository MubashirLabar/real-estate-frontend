export const removeExtraSpace = (str) => {
  return str.replace(/ {2,}/g, " ");
};
