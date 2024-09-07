import type { DayList } from "../../constants/time/index.types";
import type { TimeListType } from "../../helpers/generateTimeList";
import type { ScheduleDay } from "../../types";

interface DayListType {
  list: DayList;
  timeStart: TimeListType;
  timeEnd: TimeListType;
  onChange: (data: ScheduleDay) => void;
  data: Record<string, ScheduleDay>;
  duration: number;
}
const DayList = ({ data, list, timeStart, timeEnd, onChange }: DayListType) => {
  return (
    <>
      {list.map((item) => {
        const { value } = item;
        const { timeStart: currentStart, checked: currentChecked } =
          data[item.value];

        return (
          <div className="columns-settings py-2">
            <div className="flex items-center">
              <input
                id={`checked-checkbox-${value}`}
                type="checkbox"
                checked={currentChecked}
                onChange={() => {
                  onChange({
                    ...data[item.value],
                    day: value,
                    checked: true,
                  });
                }}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor={`checked-checkbox-${item}`}
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {item.name.substring(0, 3)}
              </label>
            </div>

            {item.status ? (
              <>
                <div className="flex items-center">
                  <div>
                    <select
                      id="timeStart"
                      value={currentStart}
                      onChange={(e) => {
                        onChange({
                          ...data[item.value],
                          day: value,
                          timeStart: e.target.value,
                        });
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option>Select Time</option>
                      {timeStart.map((item) => {
                        const { value, time } = item;

                        return (
                          <option
                            value={value}
                            selected={value === currentStart}
                          >
                            {time}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="px-2">-</div>
                  <div>
                    <select
                      id="timeEnd"
                      disabled
                      value={currentStart}
                      className="bg-gray-50 disabled border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option>End Time</option>
                      {timeEnd.map((item) => {
                        const { value, timeEnd } = item;
                        return (
                          <option
                            selected={value === currentStart}
                            value={value}
                          >
                            {timeEnd}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="flex items-center">
                  <div
                    onClick={() => {
                      onChange({
                        ...data[item.value],
                        day: value,
                        timeStart: "",
                        timeEnd: "",
                        checked: false,
                      });
                    }}
                  >
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>

                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
              </>
            ) : (
              <>
                <p className="text-gray-400">Unavailable</p>
              </>
            )}
          </div>
        );
      })}
    </>
  );
};

export default DayList;
