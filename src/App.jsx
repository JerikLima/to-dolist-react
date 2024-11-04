import React, { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/tasks";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description: "Estudar Programação depois da aula",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar pro concurso",
      description: "Estudar assim que acordar para a pmce",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Treinar para a Taf",
      description: "Ir para a academia e emplacar com a corrida",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] ">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
        <AddTasks />
      </div>
    </div>
  );
}

export default App;
