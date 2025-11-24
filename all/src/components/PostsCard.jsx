import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const PostCard = ({ post, onEdit, onDelete, isNew = false }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editTitle, setEditTitle] = React.useState(post.title);
  const [editBody, setEditBody] = React.useState(post.body);
  const cardRef = React.useRef(null);

  React.useEffect(() => {
    setEditTitle(post.title);
    setEditBody(post.body);
    // eslint-disable-next-line
  }, [post.id]);

  React.useEffect(() => {
    if (isNew && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isNew]);

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
    <div
      ref={cardRef}
      className={`post-card ${isNew ? "post-card--new" : ""}`}
    >
      <div className="post-card__header">
        <span className="post-card__chip">Post</span>
        {!isEditing && (
          <div className="post-card__icon-row">
            <button className="post-card__icon-btn" onClick={() => setIsEditing(true)} title="Edit">
              <FaEdit size={16} />
            </button>
            <button
              className="post-card__icon-btn post-card__icon-btn--danger"
              onClick={() => {
                onDelete(post.id);
                toast.info("Post deleted!");
              }}
              title="Delete"
            >
              <FaTrash size={16} />
            </button>
          </div>
        )}
      </div>

      {isEditing ? (
        <div className="post-card__edit">
          <input
            className="post-card__input"
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            className="post-card__textarea"
            value={editBody}
            onChange={e => setEditBody(e.target.value)}
            rows={3}
            placeholder="Body"
          ></textarea>
          <div className="post-card__edit-actions">
            <button className="post-card__btn post-card__btn--ghost" onClick={handleCancel} type="button">
              Cancel
            </button>
            <button className="post-card__btn post-card__btn--primary" onClick={handleSave} type="button">
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="post-card__content">
          <h4 className="post-card__title">{post.title}</h4>
          <p className="post-card__body">{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostCard;
