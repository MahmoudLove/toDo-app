import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import toast from 'react-hot-toast';

import { changeTask, addTask } from '@/store';
export default function TasksForm() {
  const dispatch = useDispatch();
  const [type, setType] = useState('todo');
  let { task, name } = useSelector((state) => {
    const task = state.lists.newTask;
    const name = state.forms.savedName || 'Honey';
    return { task, name };
  });
  [name] = name.split(' ');
  const handleTaskChange = (e) => {
    dispatch(changeTask(e.target.value));
  };
  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (task.length < 10)
      return toast.error(`Hallo ${name} Task must be more than 10 Characters`);
    const newTask = {
      type,
      task,
    };
    dispatch(addTask(newTask));
    toast.success(`Ok ${name} Task added`);
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  return (
    <form className="flex flex-col my-4" onSubmit={handleTaskSubmit}>
      <label className="text-xl my-1">New Task </label>
      <textarea
        rows={3}
        placeholder="Having A kid with me ...."
        className="placeholder:text-black/50 border border-black/30 rounded-sm shrink-0 outline-none my-1 pl-1"
        onChange={handleTaskChange}
        minLength="10"
        required
        value={task}
      />
      <select
        className="my-1 p-1  border-black/30 border rounded-sm outline-none focus:border-cyan-400"
        onChange={handleTypeChange}
      >
        <option value="todo">todo</option>
        <option value="inProgress">inPrgoress</option>
        <option value="tommorow">tommorow</option>
        <option value="done">done</option>
      </select>
      <button
        type="submit"
        className="bg-cyan-400 p-1 py-2 text-white rounded-lg grow mt-2"
      >
        Add Task
      </button>
    </form>
  );
}
