import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { removeAllTasks, removeName } from '@/store';
export default function ExtraTalk() {
  const dispatch = useDispatch();
  const handleNameRemove = () => {
    dispatch(removeName());
    toast('Now You are a stranger', {
      icon: '👻',
    });
  };
  const handleTasksRemove = () => {
    console.log('remove');
    dispatch(removeAllTasks());
    toast('Now Your life is empty', {
      icon: '🕳',
    });
  };
  return (
    <div className="mt-4">
      <h1 className="text-xs  text-center">
        Note: you can double tap on any task drag it then drop the task in any
        other category to add it there
      </h1>
      <div className="flex flex-col gap-4 mt-4">
        <button
          className="bg-red-400 p-1 text-white"
          onClick={handleTasksRemove}
        >
          Reset All Tasks
        </button>
        <button
          className="bg-red-400 p-1 text-white"
          onClick={handleNameRemove}
        >
          Reset Your Name
        </button>
      </div>
      <h1 className="text-center mt-3">Good Luck with your life &lt;3</h1>
    </div>
  );
}
