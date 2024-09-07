import DayList from "../../components/Settings/DayList";
import FormDuration from "../../components/Settings/FormDuration";
import { DAY_LIST, DURATION_LIST } from "../../constants/time";
import { generateTimeSlots } from "../../helpers/generateTimeList";
import useView from "./View.hook";
import "./View.styles.css";

const Scheduler = () => {
  const timeList = generateTimeSlots(7 * 60, 19 * 60, 30);

  const { scheduleData, handleChangeDuration } = useView();
  return (
    <div className="bg-slate-100 w-full">
      <FormDuration
        data={scheduleData}
        list={DURATION_LIST}
        onChange={handleChangeDuration}
      />

      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="mb-8">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Availability
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Set your weekly recurring schedule
          </p>
        </div>

        <div className="w-full">
          <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
            <div className="flex flex-col pb-3">
              <DayList
                list={DAY_LIST}
                timeStart={timeList}
                timeEnd={timeList}
              />
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
