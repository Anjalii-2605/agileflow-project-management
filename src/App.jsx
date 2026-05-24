import { useState } from "react";
import "./App.css";

function App() {
  const [stats, setStats] = useState([
    { title: "Total Projects", value: 8 },
    { title: "Active Tasks", value: 24 },
    { title: "Completed", value: 15 },
    { title: "Team Members", value: 6 },
  ]);

  const [tasks, setTasks] = useState([
    { name: "Design Login Page", status: "To Do" },
    { name: "Connect MongoDB", status: "In Progress" },
    { name: "Build API", status: "Done" },
  ]);

  const [newTask, setNewTask] = useState("");

  const addProject = () => {
    setStats((prev) =>
      prev.map((stat) =>
        stat.title === "Total Projects"
          ? { ...stat, value: stat.value + 1 }
          : stat
      )
    );
  };

  const addTask = () => {
    if (newTask.trim() === "") return;

    setTasks([...tasks, { name: newTask, status: "To Do" }]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const moveTask = (index) => {
    const updatedTasks = [...tasks];

    if (updatedTasks[index].status === "To Do")
      updatedTasks[index].status = "In Progress";
    else if (updatedTasks[index].status === "In Progress")
      updatedTasks[index].status = "Done";

    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <h1>AgileFlow</h1>
        <ul>
          <li>Dashboard</li>
          <li>Projects</li>
          <li>Tasks</li>
          <li>Team</li>
          <li>Reports</li>
        </ul>
      </aside>

      <main className="main">
        <h2>Project Dashboard</h2>

        <div className="controls">
          <input
            type="text"
            placeholder="Enter task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />

          <button onClick={addProject}>Add Project</button>
          <button onClick={addTask}>Add Task</button>
        </div>

        <div className="stats">
          {stats.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.value}</p>
            </div>
          ))}
        </div>

        <div className="kanban">
          <h2>Kanban Board</h2>

          {["To Do", "In Progress", "Done"].map((status) => (
            <div key={status}>
              <h3>{status}</h3>

              {tasks
                .filter((task) => task.status === status)
                .map((task, index) => (
                  <div className="task-card" key={index}>
                    <span>{task.name}</span>

                    <div>
                      {status !== "Done" && (
                        <button onClick={() => moveTask(index)}>
                          Move
                        </button>
                      )}

                      <button
                        onClick={() => deleteTask(index)}
                        style={{ marginLeft: "10px" }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;