import type { DurationList } from "../../constants/time/index.types";

interface FormDurationType {
  list: DurationList;
  onChange: (key: string, value: number) => void;
}
const FormDuration = ({ list }: FormDurationType) => {
  return (
    <form className="max-w-sm mx-auto">
      <label
        htmlFor="duration"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Visit Duration
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {list.map((item) => {
          return <option value={item.value}>{item.duration} min</option>;
        })}
      </select>
    </form>
  );
};

export default FormDuration;
