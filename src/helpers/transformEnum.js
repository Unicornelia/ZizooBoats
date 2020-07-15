export const transformEnum = input => {
  const newString = input.replace(/_/g, " ");
  return newString[0].toUpperCase() + newString.substring(1).toLowerCase();
};
