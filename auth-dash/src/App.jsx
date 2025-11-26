import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrUser()
      .then((user) => {
        if (user) {
          dispatch(login({ user }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  // -------------------------
  // SHOW LOADING SCREEN
  // -------------------------
return (
  <div className="min-h-screen flex flex-col">
    <Header />
     <main>
        TODO:  <Outlet />
        </main>
    <Footer />
  </div>
);

  // -------------------------
  // NORMAL RENDER (IMPORTANT)
  // -------------------------
  // return (
  //   <div className="min-h-screen flex flex-col">
  //     <Header />
      
  //     <Footer />
  //   </div>
  // );
}

export default App;
