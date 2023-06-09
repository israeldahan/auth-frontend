import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }
  useEffect(() => {
    getData('http://localhost:3001');
  }, []);

  const handleLogin = async () => {
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: 'admin', password: 'admin' })
    });
    const data = await response.json();
    console.log(data);
  }
  
  const handleRegister = async () => {
    const response = await fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: 'admin', password: 'admin' , email: 'admin@admin.com' })
    });
    const data = await response.json();
    console.log(data);
  }

  const handleAdmin = async () => {
    const response = await fetch('http://localhost:3001/admin', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `123456789`
      },
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data && data.msg && <p>{data.msg}</p>}
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Register</button>
        <button onClick={handleAdmin} >Admin</button>
      </header>
    </div>
  );
}

export default App;
