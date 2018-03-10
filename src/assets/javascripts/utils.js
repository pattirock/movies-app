/* eslint-disable import/prefer-default-export */
export const toTitleCase = (str) => {
  const str1 = str.replace(/_/g, ' ');

  return str1.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};
