import { useRef } from 'react';
import Input from '../Common/Input';
import Modal from '../Common/Modal';

export default function NewProject({ onCancel, saveProject }) {
  const title = useRef();
  const desc = useRef();
  const dueDate = useRef();
  const dialog = useRef();

  const onSave = () => {
    const titleValue = title.current.value;
    const descriptionValue = desc.current.value;
    const dueDateValue = dueDate.current.value;

    if (
      titleValue.trim() === '' ||
      descriptionValue.trim() === '' ||
      dueDateValue.trim() === ''
    ) {
      dialog.current.open();
    } else {
      saveProject({
        id: Math.random(),
        title: title.current.value,
        description: desc.current.value,
        dueDate: dueDate.current.value,
      });
    }
  };

  return (
    <>
      <Modal ref={dialog} buttonLabel="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Please make sure to provide a valid value for every field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={onSave}
          >
            Save
          </button>
        </menu>
        <div>
          <p>
            <Input ref={title} type="text" label="Title" />
          </p>
          <p>
            <Input ref={desc} label="Description" textArea />
          </p>
          <p>
            <Input ref={dueDate} type="date" label="Due Date" />
          </p>
        </div>
      </div>
    </>
  );
}
