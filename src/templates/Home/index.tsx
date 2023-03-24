import { Task } from "components/Task/Task";
import { useEffect, useState } from "react";
import { Form } from "components/Form/Form";

function Home() {
  const [textValue, setTextValue] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    if (tasks == null) return;
    setTasks(JSON.parse(tasks));
  }, []);

  const handleOnChange = (e) => {
    setTextValue(e.target.value);
  };

  const createTask = () => {
    if (!textValue) return;
    const availableTasks = [...tasks];
    availableTasks.push({ task: textValue, checked: false });
    setTasks(availableTasks);
    localStorage.setItem("tasks", JSON.stringify(availableTasks));
    setTextValue("");
  };

  const editTask = (index, editValue) => {
    if (!editValue) return;
    const availableTasks = [...tasks];
    availableTasks[index].task = editValue;
    localStorage.setItem("tasks", JSON.stringify(availableTasks));
    setTasks(availableTasks);
  };

  const checkTask = (index) => {
    const availableTasks = [...tasks];
    availableTasks[index].checked = !availableTasks[index].checked;
    localStorage.setItem("tasks", JSON.stringify(availableTasks));
    setTasks(availableTasks);
  };

  const deleteTask = (index) => {
    const availableTasks = [...tasks];
    availableTasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(availableTasks));
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
            checked={el.checked}
            editTask={editTask}
            checkTask={() => checkTask(i)}
            deleteTask={() => deleteTask(i)}
          />
        );
      })}
    </div>
  );
}

export default Home;
