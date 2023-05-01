import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [data, setData] = useState(null);

  const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };
  useEffect(() => {
    getData("http://localhost:3001");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data && data.msg && <p>{data.msg}</p>}
        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>      
        </Router>

      </header>
    </div>
  );
}

export default App;
