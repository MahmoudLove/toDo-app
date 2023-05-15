import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';
export default function TaskHeader({
  count,
  type,
  showTasks,
  setShowTasks,
  bg,
}) {
  const arrowsClass =
    'absolute right-[5%] top-[50%] translate-y-[-50%] text-2xl';
  const handleShowTask = () => setShowTasks(!showTasks);
  return (
    <div className="relative">
      {showTasks ? (
        <IoIosArrowDown className={arrowsClass} onClick={handleShowTask} />
      ) : (
        <IoIosArrowBack className={arrowsClass} onClick={handleShowTask} />
      )}
      <div
        className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}
      >
        {type}
        <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">
          {count}
        </div>
      </div>
    </div>
  );
}
