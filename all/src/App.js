import React from "react";
import Router from "./Routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router />
        <ToastContainer position="top-right" autoClose={2000} />
      </AuthProvider>
    </Provider>
  );
}

export default App;
