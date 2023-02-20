import { Task } from "components/Task/Task";
import { useState } from "react";
import { Form } from "components/Form/Form";

function Home() {
  const [textValue, setTextValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleOnChange = (e) => {
    setTextValue(e.target.value);
  };

  const createTask = () => {
    if (!textValue) return;
    const availableTasks = [...tasks];
    availableTasks.push({ task: textValue });
    setTasks(availableTasks);
    setTextValue("");
  };

  const editTask = (index, editValue) => {
    if (!editValue) return;
    const availableTasks = [...tasks];
    availableTasks[index].task = editValue;
    setTasks(availableTasks);
  };

  const deleteTask = (index) => {
    const availableTasks = [...tasks];
    availableTasks.splice(index, 1);
    setTasks(availableTasks);
  };

  return (
    <div className="p-2">
      <h1 className="text-center text-5xl font-bold">TASK LIST</h1>
      <Form
        textValue={textValue}
        createTask={createTask}
        handleChangeValue={handleOnChange}
      />
      {tasks.map((el, i) => {
        return (
          <Task
            key={i}
            index={i}
            task={el.task}
            editTask={editTask}
            deleteTask={() => deleteTask(i)}
          />
        );
      })}
    </div>
  );
}

export default Home;
