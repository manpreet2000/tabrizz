
export default function TimeInterval({setTimeInterval, timeInterval}: {setTimeInterval: React.Dispatch<React.SetStateAction<number>>, timeInterval: number}){

  return (
    <div className="container border border-white p-6 flex flex-col min-h-40 mt-28 lg:mt-0">
      <span className="text-2xl">Rizz Frequency?</span>
      <div>
        <div className="p-3 pl-0 text-gray-400">
          Rizz my Tab up after every {timeInterval} seconds
        </div>
        <select
          value={timeInterval}
          onChange={(e) => setTimeInterval(+e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value={1}>1 seconds</option>
          <option value={2}>2 seconds</option>
          <option value={3}>3 seconds</option>
          <option value={4}>4 seconds</option>
          <option value={5}>5 seconds</option>
        </select>
      </div>
    </div>
  );
}
