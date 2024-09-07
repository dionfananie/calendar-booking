import FormDuration from "../../components/Settings/FormDuration";
import { DAY_LIST, DURATION_LIST } from "../../constants/time";
import { generateTimeSlots } from "../../helpers/generateTimeList";
import useView from "./View.hook";
import "./View.styles.css";

const Scheduler = () => {
  const timeList = generateTimeSlots(7 * 60, 19 * 60, 30);

  const { handleChangeDuration } = useView();
  return (
    <div className="bg-slate-100 w-full">
      <form className="max-w-sm mx-auto py-4">
        <div className="mb-5">
          <FormDuration list={DURATION_LIST} onChange={handleChangeDuration} />
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="videocall"
              type="checkbox"
              value=""
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
              {DAY_LIST.map((item) => {
                return (
                  <div className="columns-settings py-2">
                    <div className="flex items-center">
                      <input
                        // checked
                        id={`checked-checkbox-${item}`}
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor={`checked-checkbox-${item}`}
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {item.substring(0, 3)}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <div>
                        <select
                          id="countries"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option selected>Select Time</option>
                          {timeList.map((item) => {
                            return <option value={item}>{item}</option>;
                          })}
                        </select>
                      </div>
                      <div className="px-2">-</div>
                      <div>
                        <select
                          id="countries"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option selected>Select Time</option>
                          {timeList.map((item) => {
                            return <option value={item}>{item}</option>;
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="flex items-center">
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
                  </div>
                );
              })}
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
