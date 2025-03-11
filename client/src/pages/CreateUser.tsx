import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'

const CreateUser = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        if (response.ok) {
            alert('User created successfully!');
            navigate('/');
        } else {
            alert('Failed to create user. Please try again.');
        }
    };

    return (
        <div className="user-form">
        <form id="createUserForm" onSubmit={handleSubmit}>
           <label>Username: </label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder=""
                className="input-small"
                required
            />
            <label>Email: </label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                className="input-small"
                required
            />
            <label>Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=""
                className="input-small"
                required
            />
            <button className="small-btn" type="submit">Create User</button>
        </form>
        </div>
    );
};

export default CreateUser;
