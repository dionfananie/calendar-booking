import { useState } from "react";
import { ScheduleData } from "../../types";

const useView = () => {
  const [scheduleData, setScheduleData] = useState<ScheduleData>({
    duration: 1,
    session: 1,
    withVideo: false,
  });

  const handleChangeDuration = (key: string, value: number) => {
    setScheduleData((recentData) => ({ ...recentData, [key]: value }));
  };
  return { handleChangeDuration };
};

export default useView;
