import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const PostCard = ({ post, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editTitle, setEditTitle] = React.useState(post.title);
  const [editBody, setEditBody] = React.useState(post.body);

  React.useEffect(() => {
    setEditTitle(post.title);
    setEditBody(post.body);
    // eslint-disable-next-line
  }, [post.id]);

  const handleSave = () => {
    if (!editTitle.trim() || !editBody.trim()) {
      toast.error("Please enter a title and body to save changes.");
      return;
    }
    onEdit({ ...post, title: editTitle, body: editBody });
    setIsEditing(false);
    toast.success("Post edited!");
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditTitle(post.title);
    setEditBody(post.body);
  };

  return (
    <div style={{ border: "1px solid #ccc", margin: "8px", padding: "8px", borderRadius: "6px", background: "#f9fafc" }}>
      {isEditing ? (
        <div style={{ marginBottom: "6px" }}>
          <input
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
            style={{
              width: "100%",
              padding: "6px 8px",
              marginBottom: "6px",
              border: "1px solid #b6c2cf",
              borderRadius: "4px",
              fontSize: "1rem"
            }}
            placeholder="Title"
          />
          <textarea
            value={editBody}
            onChange={e => setEditBody(e.target.value)}
            rows={3}
            style={{
              width: "100%",
              padding: "6px 8px",
              border: "1px solid #b6c2cf",
              borderRadius: "4px",
              fontSize: "0.99rem",
              resize: "vertical"
            }}
            placeholder="Body"
          ></textarea>
          <div style={{ marginTop: "8px", display: "flex", gap: "8px" }}>
            <button
              style={{
                background: "#3b82f6",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                padding: "6px 14px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
              onClick={handleSave}
              type="button"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              style={{
                background: "#e5e7eb",
                color: "#374151",
                border: "none",
                borderRadius: "4px",
                padding: "6px 14px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <h4 style={{ marginBottom: "4px" }}>{post.title}</h4>
          <p style={{ marginBottom: "6px", whiteSpace: "pre-line" }}>{post.body}</p>
        </>
      )}
      <div style={{ marginTop: "4px" }}>
        {!isEditing && (
          <FaEdit
            onClick={() => setIsEditing(true)}
            style={{ margin: "0 8px 0 0", cursor: "pointer", color: "#6366f1" }}
            title="Edit"
          />
        )}
        <FaTrash
          onClick={() => { onDelete(post.id); toast.info("Post deleted!"); }}
          style={{ cursor: "pointer", color: "#ef4444" }}
          title="Delete"
        />
      </div>
    </div>
  );
};

export default PostCard;
