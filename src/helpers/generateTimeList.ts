export const generateTimeSlots = (
  startTime: number,
  endTime: number,
  interval: number
): { value: string; time: string }[] => {
  const times = [];
  let time = startTime;
  let idx = 0;
  while (time <= endTime) {
    let hours = Math.floor(time / 60);
    let minutes: string | number = time % 60;
    const period = hours >= 12 ? "PM" : "AM";

    // Convert hours from 24-hour to 12-hour format
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    idx++;
    times.push({ value: `time-${idx}`, time: `${hours}:${minutes} ${period}` });
    time += interval;
  }

  return times;
};

export type TimeListType = ReturnType<typeof generateTimeSlots>;
