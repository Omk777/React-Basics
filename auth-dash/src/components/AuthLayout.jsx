import React ,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({ children, authentication = true }) {

  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // Page requires login
    if (authentication && authStatus === false) {
      navigate("/login");
    }

    // Page should not be visited by logged-in user
    if (!authentication && authStatus === true) {
      navigate("/");
    }
  }, [authStatus, authentication, navigate]);

  return <>{children}</>;
}
