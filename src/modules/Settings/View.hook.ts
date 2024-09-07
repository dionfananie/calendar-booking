import { useState } from "react";
import { ScheduleData, type ScheduleDay } from "../../types";
import { generateTimeSlots } from "../../helpers/generateTimeList";
import { DURATION_LIST } from "../../constants/time";

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
  const selectedDuration = DURATION_LIST.find(
    (item) => item.value === scheduleData.duration
  );
  const timeEndList = generateTimeSlots(
    7 * 60,
    19 * 60,
    selectedDuration?.duration || 0
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
