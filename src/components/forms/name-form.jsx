import { useSelector, useDispatch } from 'react-redux';
import { changeName, saveName } from '@/store';

export default function NameForm() {
  const dispatch = useDispatch();
  const { name, savedName } = useSelector((state) => {
    const { name, savedName } = state.forms;
    return { name, savedName };
  });
  if (savedName) {
    let [son, father] = savedName.split(' ');
    const fullName = son.concat(father);

    return (
      <h1 className="text-center name-animate before:content-['❣'] after:content-['❣']">
        {son} {father}
      </h1>
    );
  }
  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };
  const handleNameSubmit = (e) => {
    e.preventDefault();
    dispatch(saveName());
  };
  return (
    <form onSubmit={handleNameSubmit} className="flex flex-col ">
      <label htmlFor="name" className="text-xl">
        Your Name &lt;3
      </label>
      <div className="flex gap-3">
        <input
          className="placeholder:text-black/50 border border-black/30 rounded-sm shrink-0 outline-none"
          onChange={handleNameChange}
          title="only required in the first time"
          id="name"
          value={name}
          placeholder="Loly Bella"
        />
        <button type="submit" className="bg-cyan-400 p-1 text-white rounded-lg">
          Submit
        </button>
      </div>
    </form>
  );
}
