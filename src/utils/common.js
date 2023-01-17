export const removeExtraSpace = (str) => {
  return str.replace(/ {2,}/g, " ");
};

export const covertArrayToString = (data) => {
  const renovationLabels = data.map((r) => r.label);
  const singleString = renovationLabels.join(", ");
  return singleString;
};
