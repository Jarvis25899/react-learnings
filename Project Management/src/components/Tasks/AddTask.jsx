import { useState } from 'react';

export default function AddTask({ addTask }) {
  const [task, setTask] = useState('');

  const handleOnChange = (event) => setTask(event.target.value);

  const handleOnClick = () => {
    if (task.trim() !== '') {
      addTask(task.trim());
      setTask('');
    }
  };

  return (
    <div className="flex items-center gap-4">
      <input
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleOnChange}
        value={task}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleOnClick}
      >
        Add Task
      </button>
    </div>
  );
}
