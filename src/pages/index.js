import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { saveName, saveAllTasks } from '@/store';
import NameForm from '@/components/forms/name-form';
import TasksForm from '@/components/forms/tasks-form';
import TaskSection from '@/components/task-section';
import ExtraTalk from '@/components/extra-talk';
export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const happyName = JSON.parse(localStorage.getItem('happyName'));
    const happyTasks = JSON.parse(localStorage.getItem('happyTasks'));
    if (happyTasks) dispatch(saveAllTasks(happyTasks));
    dispatch(saveName(happyName));
  }, []);

  const types = useSelector((state) => {
    return state.lists.types;
  });

  return (
    <div className="p-3">
      <NameForm />
      <TasksForm />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-y-3 gap-x-3">
        {types.map((type) => (
          <TaskSection type={type} key={type} />
        ))}
      </div>
      <ExtraTalk />
    </div>
  );
}
