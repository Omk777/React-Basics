import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const TaskCard = ({ task, onEdit, onDelete }) => {
  const [editable, setEditable] = useState(false);
  const [title, setTitle] = useState(task.title);

  useEffect(() => {
    setTitle(task.title);
  }, [task.title]);

  const handleSave = () => {
    if (!title.trim()) {
      toast.error("Task title cannot be empty.");
      return;
    }
    onEdit({ ...task, title: title.trim() });
    toast.success("Task updated!");
    setEditable(false);
  };

  const handleCancel = () => {
    setTitle(task.title);
    setEditable(false);
  };

  return (
    <div
      style={{
        borderRadius: "20px",
        padding: "20px",
        background: "linear-gradient(120deg, #f8fafc 0%, #eef2ff 100%)",
        border: "1px solid rgba(99, 102, 241, 0.2)",
        marginBottom: "16px",
        boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {editable ? (
          <input
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              flex: 1,
              border: "1px solid #c7d2fe",
              borderRadius: "12px",
              padding: "10px 16px",
              fontSize: "1rem"
            }}
          />
        ) : (
          <p style={{ flex: 1, margin: 0, fontSize: "1.05rem", fontWeight: 600, color: "#0f172a" }}>{task.title}</p>
        )}

        {!editable && (
          <>
            <button
              onClick={() => setEditable(true)}
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
                color: "#4f46e5"
              }}
              title="Edit"
            >
              <FaEdit size={18} />
            </button>
            <button
              onClick={() => {
                onDelete(task.id);
                toast.info("Task deleted!");
              }}
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
                color: "#ef4444"
              }}
              title="Delete"
            >
              <FaTrash size={18} />
            </button>
          </>
        )}
      </div>

      {editable && (
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "16px" }}>
          <button
            onClick={handleCancel}
            type="button"
            style={{
              border: "1px solid #c7d2fe",
              borderRadius: "999px",
              padding: "10px 22px",
              background: "#fff",
              fontWeight: 600,
              cursor: "pointer",
              color: "#475569"
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            type="button"
            style={{
              border: "none",
              borderRadius: "999px",
              padding: "10px 22px",
              background: "linear-gradient(120deg, #22d3ee, #22c55e)",
              color: "#fff",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 10px 20px rgba(34, 197, 94, 0.4)"
            }}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
