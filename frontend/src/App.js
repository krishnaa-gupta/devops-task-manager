import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Fetch tasks
  const fetchTasks = async () => {
    try {
      const res = await axios.get(
        "http://3.108.190.192:5000/api/tasks"
      );

      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add task
  const addTask = async () => {
    if (!task) return;

    try {
      await axios.post(
        "http://3.108.190.192:5000/api/tasks",
        {
          title: task
        }
      );

      setTask("");

      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>DevOps Task Manager</h1>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginRight: "10px"
        }}
      />

      <button
        onClick={addTask}
        style={{
          padding: "10px 20px"
        }}
      >
        Add Task
      </button>

      <ul style={{ marginTop: "20px" }}>
        {tasks.map((t) => (
          <li key={t._id}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
