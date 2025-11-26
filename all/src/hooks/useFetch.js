import { useFetch ,useEffect} from "./hooks/useFetch";
import { useState } from "react";

const App = () => {
  const { data: postsData, loading: loadingPosts } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const { data: tasksData, loading: loadingTasks } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const [posts, setPosts] = useState([]);
  const [tasks, setTasks] = useState([]);

  // Initialize local state after fetch
  useEffect(() => {
    if (!loadingPosts) setPosts(postsData);
  }, [loadingPosts, postsData]);

  useEffect(() => {
    if (!loadingTasks) setTasks(tasksData);
  }, [loadingTasks, tasksData]);

  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  if (loadingPosts || loadingTasks) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>Posts</h2>
      {posts.slice(0, 5).map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <button onClick={() => handleDeletePost(post.id)}>Delete</button>
        </div>
      ))}

      <h2>Tasks</h2>
      {tasks.slice(0, 5).map((task) => (
        <div key={task.id}>
          <input type="checkbox" checked={task.completed} readOnly />
          {task.title}
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default App;
