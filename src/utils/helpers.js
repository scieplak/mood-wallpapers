export const getDayPart = (Date) => {
  const currentHour = Date.getHours();
  if (currentHour >= 5 && currentHour < 12) return 'morning';
  if (currentHour >= 12 && currentHour < 18) return 'afternoon';
  if (currentHour >= 18 && currentHour < 21) return 'evening';
  return 'night';
};

export const getSeason = (Date) => {
  const currentMonth = Date.getMonth();

  if (currentMonth >= 3 && currentMonth < 6) return 'spring';
  if (currentMonth >= 6 && currentMonth < 8) return 'summer';
  if (currentMonth >= 8 && currentMonth < 11) return 'fall';

  return 'winter';
};
