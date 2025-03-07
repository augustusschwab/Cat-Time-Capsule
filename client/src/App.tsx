import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import Home from './pages/Home'

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: reactLogo.FormEvent) => {
    e.preventDefault();
    console.log('Logging in with:', username, password);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="control">
          <h1>Login</h1>
        </div>
        <div className="control block-cube block-input">
          <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          type="text"
          />
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
          <div className="control block-cube block-input">
            <input
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
            />
              />
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
        </div>
        <button className="btn block-cube block-cube-hover" type="submit">
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
          <div className="text">Log In</div>
        </button>
        <div className="credits">
          <a href="https://codepen.io/marko-zub/" target="_blank" rel="noopener noreferrer">
            Codepens
          </a>
        </div>
      </form>
    </div>
  );
}

export default App
