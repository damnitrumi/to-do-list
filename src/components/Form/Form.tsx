type FormProps = {
  textValue: string;
  handleChangeValue: (e) => void;
  createTask: () => void;
};

export const Form = ({
  textValue,
  createTask,
  handleChangeValue,
}: FormProps) => {
  return (
    <div className="flex gap-2 my-5">
      <input
        type="text"
        className="grow outline-0 border-2 border-gray-300 rounded py-2 pl-3 "
        placeholder="Add new task"
        value={textValue}
        onChange={handleChangeValue}
      />
      <button
        className="bg-blue-600 rounded px-6 text-white outline-0 border-0 hover:bg-sky-600"
        onClick={createTask}
      >
        ADD
      </button>
    </div>
  );
};
