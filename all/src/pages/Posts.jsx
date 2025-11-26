import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost, editPost, deletePost } from "../redux/Slices/postsSlice";
import PostCard from "../components/PostsCard";
import { toast } from "react-toastify";

const Posts = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [recentPostId, setRecentPostId] = useState(null);
  const posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!title || !body) return toast.error("Enter post title and body");
    const newPost = { id: Date.now(), title, body };
    dispatch(addPost(newPost));
    setRecentPostId(newPost.id);
    toast.success("Post added!");
    setTitle("");
    setBody("");
  };

  useEffect(() => {
    if (!recentPostId) return;
    const timer = setTimeout(() => setRecentPostId(null), 1600);
    return () => clearTimeout(timer);
  }, [recentPostId]);

  const orderedPosts = useMemo(() => [...posts].reverse(), [posts]);

  return (
    <div style={{
      maxWidth: "600px",
      margin: "40px auto",
      padding: "32px",
      background: "#fff",
      borderRadius: "16px",
      boxShadow: "0 4px 24px rgba(40,60,125,0.09)",
      color: "#222", // Ensure base text color is readable
      fontFamily: "Segoe UI, Arial, sans-serif"
    }}>
      <h2 style={{
        textAlign: "center",
        marginBottom: "24px",
        letterSpacing: "2px",
        color: "#374151"
      }}>Posts</h2>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        marginBottom: "28px",
        background: "#f8fafc",
        borderRadius: "10px",
        padding: "20px 18px 14px",
        color: "#222"
      }}>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
          style={{
            padding: "10px",
            border: "1px solid #b6c2cf",
            borderRadius: "6px",
            fontSize: "1rem",
            outline: "none",
            transition: "border-color 0.2s",
            color: "#222",
            background: "#f3f5fa"
          }}
        />
        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
          placeholder="Body"
          rows={4}
          style={{
            padding: "10px",
            border: "1px solid #b6c2cf",
            borderRadius: "6px",
            fontSize: "1rem",
            resize: "vertical",
            outline: "none",
            color: "#222",
            background: "#f3f5fa"
          }}
        ></textarea>
        <button
          onClick={handleAdd}
          style={{
            background: "linear-gradient(90deg,#6366f1 10%,#3b82f6 90%)",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "10px",
            fontWeight: "bold",
            fontSize: "1.1rem",
            cursor: "pointer",
            boxShadow: "0 1px 8px 0 rgba(60,70,130,.07)",
            letterSpacing: "1px"
          }}
        >
          Add Post
        </button>
      </div>
      <div>
        {orderedPosts.length === 0 ? (
          <p style={{ textAlign: "center", color: "#7c8392" }}>No posts yet. Write your first post!</p>
        ) : (
          orderedPosts.map(post => (
            <PostCard
              key={post.id}
              post={post}
              onEdit={(updatedPost) => dispatch(editPost(updatedPost))}
              onDelete={(id) => dispatch(deletePost(id))}
              isNew={recentPostId === post.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Posts;
