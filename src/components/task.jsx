import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useDrag } from 'react-dnd';

import { removeTask, updateTask } from '@/store';
export default function Task({ task, bg }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'task',
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const dispatch = useDispatch();
  let { name } = useSelector((state) => {
    const name = state.forms.savedName || 'Honey';
    return { name };
  });
  [name] = name.split(' ');
  const handleTaskRemove = () => {
    dispatch(removeTask(task.id));
    toast.success(`Task Removed`);
  };
  const handleAddingToDone = () => {
    dispatch(updateTask({ id: task.id, type: 'done' }));
    toast.success(`Good job ${name}`);
  };
  console.log(task);
  const taskDate = new Date(task.date);
  const year = taskDate.getFullYear();
  const month = taskDate.getMonth() + 1;
  const day = taskDate.getUTCDate();
  const hour = taskDate.getHours() - 1;
  const mins = taskDate.getMinutes();
  const fullDate = `${day}/${month}/${year} ${hour}:${mins}`;

  return (
    <div
      ref={drag}
      className={`bg-zinc-300 rounded-md p-2 relative flex flex-col cursor-grab ${
        isDragging ? 'opacity-25' : 'opacity-100'
      }`}
    >
      <p>{task.task}</p>
      <span>{fullDate}</span>
      {task.type !== 'done' && (
        <button
          className="bg-green-500 text-white p-[2px] rounded-sm mb-3"
          onClick={handleAddingToDone}
        >
          Done?
        </button>
      )}
      <button className={`${bg}`} onClick={handleTaskRemove}>
        Remove Task
      </button>
    </div>
  );
}
