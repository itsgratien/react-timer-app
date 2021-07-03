const addZeroBeforeSingleInteger = (value: number) => {
  if (value < 10) {
    return `0${value}`;
  }

  return `${value}`;
};

export const convertSecondToTime = (value: number) => {
  const sec = parseInt(String(value), 10);

  const hour = Math.floor(sec / 3600);

  const min = Math.floor((sec - hour * 60) / 60);

  const d = hour * 3600;

  const m = min * 60;

  const seconds = Math.floor(sec - d - m);

  return {
    hours: addZeroBeforeSingleInteger(hour),
    minutes: addZeroBeforeSingleInteger(min),
    seconds: addZeroBeforeSingleInteger(seconds)
  };
};
