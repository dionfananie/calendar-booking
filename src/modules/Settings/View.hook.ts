import { useState } from "react";
import { ScheduleData, type ScheduleDay } from "../../types";
import { generateTimeSlots } from "../../helpers/generateTimeList";
import { DAY_LIST, DURATION_LIST } from "../../constants/time";

const initialDays: Record<string, ScheduleDay> = DAY_LIST.reduce((acc, day) => {
  acc[day.value] = { timeStart: 0, timeEnd: 0, checked: false };
  return acc;
}, {});
const useView = () => {
  const [scheduleData, setScheduleData] = useState<ScheduleData>({
    duration: "duration-1",
    session: 1,
    withVideo: false,
  });
  const [scheduleDay, setScheduleDay] =
    useState<Record<string, ScheduleDay>>(initialDays);
  console.log(scheduleDay);

  const handleChangeDuration = (value: Record<string, unknown>) => {
    setScheduleData((recentData) => ({ ...recentData, ...value }));
  };
  const handleChangeDay = (data: ScheduleDay) => {
    setScheduleDay((v) => ({ ...v, [data.day]: data }));
  };

  const timeList = generateTimeSlots(7 * 60, 19 * 60, 30);
  const selectedDuration = DURATION_LIST.find(
    (item) => item.value === scheduleData.duration
  );
  const timeEndList = generateTimeSlots(
    7 * 60,
    19 * 60,
    selectedDuration?.duration || 30
  );

  return {
    scheduleData,
    scheduleDay,
    timeEndList,
    timeList,
    handleChangeDuration,
    handleChangeDay,
  };
};

export default useView;
