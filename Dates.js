// Get difference between two dates
const diffInDays = (date1, date2) => {
  const d1 = date1 ? new Date(date1) : new Date();

  return Math.floor((d1 - new Date(date2)) / 864e5);
};
