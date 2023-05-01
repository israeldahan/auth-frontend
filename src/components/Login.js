import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState(null);

    const handleLogin = async () => {
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        setData(data);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Login</h1>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
                {data && data.msg && <p>{data.msg}</p>}
            </header>
        </div>
    );
}

export default Login;