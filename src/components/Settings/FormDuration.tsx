import type { DurationList } from "../../constants/time/index.types";
import type { ScheduleData } from "../../types";

interface FormDurationType {
  data: ScheduleData;
  list: DurationList;

  onChange: (value: Record<string, unknown>) => void;
}
const FormDuration = ({ data, list, onChange }: FormDurationType) => {
  const { duration, session, withVideo } = data;
  return (
    <form className="max-w-sm mx-auto py-4">
      <div className="mb-5">
        <div className="max-w-sm mx-auto">
          <label
            htmlFor="duration"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Visit Duration
          </label>
          <select
            id="countries"
            value={duration}
            onChange={(e) => {
              onChange({ duration: e.target.value });
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {list.map((item) => {
              return <option value={item.value}>{item.duration} min</option>;
            })}
          </select>
        </div>
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          No. of Booking/session
        </label>
        <input
          type="number"
          id="number"
          defaultValue={1}
          value={session}
          onChange={(e) => {
            onChange({ session: e.target.value });
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="videocall"
            type="checkbox"
            checked={withVideo}
            onChange={() => {
              onChange({ withVideo: !withVideo });
            }}
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="videocall"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Allow video tour call
        </label>
      </div>
      {/* <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button> */}
    </form>
  );
};

export default FormDuration;
