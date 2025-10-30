import { useState } from "react";

function TwoWayBindingExample() {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <input
        type="text"
        value={username}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <p>Hello, {username}</p>
    </div>
  );
}

export default TwoWayBindingExample;
