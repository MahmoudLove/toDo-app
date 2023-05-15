import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import { useState } from 'react';
import TaskHeader from './task-header';
import Task from './task';
import { updateTask } from '@/store';
export default function TaskSection({ type }) {
  const dispatch = useDispatch();
  const handleChangingItem = (id) => {
    dispatch(updateTask({ id, type }));
  };
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'task',
    drop: (item) => handleChangingItem(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const tasks = useSelector((state) => {
    return state.lists.lists;
  });

  const [showTasks, setShowTasks] = useState(true);

  const fTasks = tasks.filter((task) => task.type === type);
  const testarr = fTasks;
  const sorted = fTasks.sort((a, b) => {
    return b.date - a.date;
  });
  let bg = 'bg-cyan-300';
  let bgLight = 'bg-cyan-300/10';
  if (type === 'tommorow') {
    bg = 'bg-red-500';
    bgLight = 'bg-red-500/10';
  } else if (type === 'done') {
    bg = 'bg-green-500';
    bgLight = 'bg-green-500/10';
  } else if (type === 'inProgress') {
    bg = 'bg-purple-400';
    bgLight = 'bg-purple-400/10';
  }
  return (
    <div ref={drop}>
      <TaskHeader
        count={fTasks.length}
        type={type}
        bg={bg}
        showTasks={showTasks}
        setShowTasks={setShowTasks}
      />
      {showTasks && (
        <div
          className={`flex flex-col gap-2 overflow-auto scroll-m-[3px] scrollbar ${bgLight}  ${
            fTasks.length === 0 ? 'h-0' : 'h-40'
          }`}
        >
          {fTasks.map((task) => (
            <Task key={task.id} task={task} bg={bg} />
          ))}
        </div>
      )}
    </div>
  );
}
