import { useState } from "react";
import { ScheduleData, type ScheduleDay } from "../../types";
import { generateTimeSlots } from "../../helpers/generateTimeList";

const useView = () => {
  const [scheduleData, setScheduleData] = useState<ScheduleData>({
    duration: "",
    session: 1,
    withVideo: false,
  });
  const [scheduleDay, setScheduleDay] = useState<ScheduleDay[]>([]);
  console.log(scheduleDay);

  const handleChangeDuration = (value: Record<string, unknown>) => {
    setScheduleData((recentData) => ({ ...recentData, ...value }));
  };
  const handleChangeDay = (data: ScheduleDay) => {
    setScheduleDay((v) => [...v, data]);
  };

  const timeList = generateTimeSlots(7 * 60, 19 * 60, 30);

  return {
    scheduleData,
    scheduleDay,
    timeList,
    handleChangeDuration,
    handleChangeDay,
  };
};

export default useView;
