export const toTitleCase = (str) => {
  const str1 = str.replace(/_/g, ' ');

  return str1.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

export const getYear = (date) => {
  const parseDate = date && new Date(date.toString());
  return parseDate ? parseDate.getFullYear() : '';
};
