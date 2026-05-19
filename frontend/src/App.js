import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get('http://3.108.190.192:5000/api/tasks');
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!title) return;

    await axios.post('http://localhost:5000/api/tasks', {
      title
    });

    setTitle('');
    fetchTasks();
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1>DevOps Task Manager</h1>

      <input
        type="text"
        placeholder="Enter Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map(task => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
