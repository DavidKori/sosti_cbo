export const getCountyColor = (projects) => {
  if (projects >= 20) return "#16a34a";
  if (projects >= 10) return "#2563eb";
  if (projects >= 5) return "#f97316";
  if (projects > 0) return "#eab308";

  return "#d1d5db";
};