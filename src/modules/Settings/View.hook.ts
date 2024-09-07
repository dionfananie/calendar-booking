import { useState } from "react";
import { ScheduleData } from "../../types";

const useView = () => {
  const [scheduleData, setScheduleData] = useState<ScheduleData>({
    duration: "",
    session: 1,
    withVideo: false,
  });

  const handleChangeDuration = (value: Record<string, unknown>) => {
    setScheduleData((recentData) => ({ ...recentData, ...value }));
  };
  return { scheduleData, handleChangeDuration };
};

export default useView;
