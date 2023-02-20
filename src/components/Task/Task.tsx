import { EditAlt } from "@styled-icons/boxicons-regular";
import { DeleteOutline } from "@styled-icons/material";
import { useState } from "react";

type TaskProps = {
  index: number;
  task: string;
  editTask: (index, editValue) => void;
  deleteTask: () => void;
};

export const Task = ({ index, task, editTask, deleteTask }: TaskProps) => {
  const [editValue, setEditValue] = useState("");
  const [editIsVisible, setEditIsVisible] = useState(false);
  const [deleteIsVisible, setDeleteIsVisible] = useState(false);

  const handleOnChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleEditTaskClick = () => {
    editTask(index, editValue);
    setEditIsVisible(false);
    setEditValue("");
  };

  return (
    <div className="min-h-[50px] flex flex-col justify-between w-full p-4 bg-gray-200 mb-2 rounded lg:flex-row ">
      <div className="flex items-center gap-3 pl-2">
        <input type="checkbox" className="peer" />
        <p className="text-black peer-checked:line-through peer-checked:text-blue-600">
          {task}
        </p>
      </div>
      <div className="flex flex-col gap-1 lg:flex-row">
        <div className="flex lg:flex-row-reverse">
          <button title="Edit Task" onClick={() => setEditIsVisible(true)}>
            <EditAlt className="fill-blue-600 hover:fill-sky-600" size="30px" />
          </button>
          <div
            className={`flex gap-2 w-0 overflow-hidden transition-all ${
              editIsVisible && "w-[320px]"
            }`}
          >
            <input
              type="text"
              className="p-1 border-2 border-red-200 outline-0 text-2xl w-full"
              value={editValue}
              onChange={handleOnChange}
            />
            <div className="flex gap-2">
              <button
                className="bg-blue-600 text-white rounded text-xl p-2 hover:bg-sky-600"
                onClick={handleEditTaskClick}
              >
                CONFIRM
              </button>
              <button
                className="bg-red-600 text-white rounded text-xl p-2 hover:bg-purple-600"
                onClick={() => setEditIsVisible((v) => !v)}
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row-reverse">
          <button onClick={() => setDeleteIsVisible(true)}>
            <DeleteOutline
              className="fill-red-600 hover:fill-purple-600"
              size="30px"
            />
          </button>
          <div
            className={`flex gap-2 w-0 overflow-hidden transition-all ${
              deleteIsVisible && "w-[128px]"
            }`}
          >
            <button
              className="bg-blue-600 text-white rounded text-xl p-2 hover:bg-sky-600"
              onClick={deleteTask}
            >
              CONFIRM
            </button>
            <button
              className="bg-red-600 text-white rounded text-xl p-2 hover:bg-purple-600"
              onClick={() => setDeleteIsVisible((v) => !v)}
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
