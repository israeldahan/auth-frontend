import React, { useState } from 'react';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail]       = useState('');
    const [error, setError]       = useState('');
    const [success, setSuccess]   = useState('');
    
    const handleRegister = async () => {
        const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password , email })
        });
        const data = await response.json();
        if (data.error) {
        setError(data.error);
        setSuccess('');
        } else {
        setError('');
        setSuccess(data.msg);
        }
    }
    
    return (
        <div className="App">
        <header className="App-header">
            <h1>Register</h1>
            {error && <p>{error}</p>}
            {success && <p>{success}</p>}
            <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
        </header>
        </div>
    );
    }

export default Register;
