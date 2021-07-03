const addZeroBeforeSingleInteger = (value: number) => {
  if (value < 10) {
    return `0${value}`;
  }

  return `${value}`;
};

export const convertMinutesToHour = (value: number) => {
  const minutePerHour = 60;

  const getHour = value / minutePerHour;

  const splitHour = String(getHour).split(".");

  let remainedMinutes = 0;

  if (splitHour.length > 1) {
    const minutes = Number(`0.${splitHour[1]}`) * minutePerHour;

    remainedMinutes = minutes;
  }

  return `${addZeroBeforeSingleInteger(
    Math.floor(getHour)
  )}h:${addZeroBeforeSingleInteger(Number(remainedMinutes))}min`;
};
