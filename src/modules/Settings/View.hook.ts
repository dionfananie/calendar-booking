import { useState } from "react";
import { ScheduleData, type ScheduleDay } from "../../types";
import { generateTimeSlots } from "../../helpers/generateTimeList";
import { DAY_LIST, DURATION_LIST } from "../../constants/time";

const initialDays: Record<string, ScheduleDay> = DAY_LIST.reduce((acc, day) => {
  acc[day.value] = { day: "", timeStart: "", checked: false };
  return acc;
}, {} as Record<string, ScheduleDay>);

const useView = () => {
  const [scheduleData, setScheduleData] = useState<ScheduleData>({
    duration: "duration-1",
    session: 1,
    withVideo: false,
  });
  const [scheduleDay, setScheduleDay] =
    useState<Record<string, ScheduleDay>>(initialDays);
  console.log(scheduleDay);

  const listDuration = DURATION_LIST.find(
    (item) => item.value === scheduleData.duration
  );

  const timeList = generateTimeSlots(
    7 * 60,
    19 * 60,
    listDuration?.duration || 30
  );

  const handleChangeDuration = (value: Record<string, unknown>) => {
    setScheduleData((recentData) => ({ ...recentData, ...value }));
  };
  const handleChangeDay = (data: ScheduleDay) => {
    setScheduleDay((v) => ({ ...v, [data.day]: data }));
  };

  return {
    duration: listDuration?.duration || 30,
    scheduleData,
    scheduleDay,
    timeEndList: timeList,
    timeList,
    handleChangeDuration,
    handleChangeDay,
  };
};

export default useView;
