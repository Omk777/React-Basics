import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, editTask, deleteTask } from "../redux/Slices/taskSlice";
import TaskCard from "../components/TaskCard";
import { toast } from "react-toastify";

const Tasks = () => {
  const [title, setTitle] = useState("");
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (title.trim() === "") {
      toast.error("Task cannot be empty!");
      return;
    }
    dispatch(addTask({ id: Date.now(), title }));
    toast.success("Task added!");
    setTitle("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ecfccb 0%, #dbeafe 45%, #ede9fe 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "60px 16px"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "640px",
          background: "#ffffff",
          borderRadius: "32px",
          padding: "48px 42px",
          boxShadow: "0 35px 70px rgba(15, 23, 42, 0.15)"
        }}
      >
        <header style={{ textAlign: "center", marginBottom: "32px" }}>
          <p style={{ margin: 0, letterSpacing: ".35em", textTransform: "uppercase", color: "#22c55e", fontWeight: 700 }}>
            Tasks
          </p>
          <h2 style={{ margin: "12px 0 0", fontSize: "2.25rem", color: "#0f172a" }}>Organize your day</h2>
          <p style={{ margin: "8px auto 0", color: "#475569", maxWidth: "420px" }}>
            Capture quick todos, edit them in place, and celebrate wins with instant toast feedback.
          </p>
        </header>

        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "28px"
          }}
        >
          <input
            style={{
              flex: 1,
              borderRadius: "999px",
              border: "1px solid #cbd5f5",
              padding: "14px 20px",
              fontSize: "1rem",
              outline: "none"
            }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="New task"
          />
          <button
            style={{
              border: "none",
              borderRadius: "999px",
              background: "linear-gradient(120deg, #22d3ee, #22c55e)",
              color: "#fff",
              padding: "14px 28px",
              fontWeight: 700,
              cursor: "pointer"
            }}
            onClick={handleAdd}
            type="button"
          >
            Add
          </button>
        </div>

        {tasks.length === 0 && (
          <p style={{ textAlign: "center", color: "#94a3b8", marginTop: "20px" }}>No tasks added yet</p>
        )}

        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={(updatedTask) => dispatch(editTask(updatedTask))}
            onDelete={(id) => dispatch(deleteTask(id))}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;