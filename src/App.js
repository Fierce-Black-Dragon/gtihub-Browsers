import "./App.css";

import { useEffect, useState } from "react";
import { login } from "./Redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "./Components/Dashboard";

function App() {
  const dispatch = useDispatch();
  const GITHUB_CLIENT_ID = "d6dc5d09b2b5c4f22d2f";
  const gitHubRedirectURL = "http://localhost:3000";
  let [code, setCode] = useState(
    new URLSearchParams(window.location.search).get("code")
  );
  const { user, isLoading } = useSelector((state) => state.authReducers);
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    window.location = "            http://localhost:3000        ";
    setCode("");
    localStorage.clear();
  } else {
    if (code && !user?.gitHubUser?.data) {
      dispatch(login(code));
      setCode("");
    }
  }

  return (
    <div className="app">
      {user?.gitHubUser?.data ? (
        <Dashboard />
      ) : (
        <>
          <nav className="nav">
            <h2>Github Browser</h2>
          </nav>
          <div>
            <a
              className="Login"
              href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${gitHubRedirectURL}?path=/&scope=user:email`}
            >
              LOGIN WITH GITHUB
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
