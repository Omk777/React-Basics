import React from "react";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./context/userContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>React Context API Demo</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
