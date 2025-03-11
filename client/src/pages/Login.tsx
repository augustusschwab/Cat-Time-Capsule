import { useState, FormEvent, ChangeEvent } from "react";
import Auth from "../utils/auth";
import { login } from "../api/auth";  
import { UserLogin } from "../interfaces/UserLogin";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState<UserLogin>({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      Auth.login(data.token);
      console.log('Login successful');
      navigate('/time-capsule');
    } catch (err) {
      console.error('Failed to login', err); 
    }
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Login</h1>
        {/* Username input field */}
        <div className="control">
          <label>Username</label>
          <input 
            type='text'
            name='username'
            value={loginData.username || ''}
            onChange={handleChange}
          />
        </div>
        {/* Password input field */}
        <div>
          <label>Password</label>
          <input 
            type='password'
            name='password'
            value={loginData.password || ''}
            onChange={handleChange}
          />
        </div>
        {/* Submit button for the login form */}
        <div>
          <button type='submit'>Login</button>
        </div>
          <Link to='/create-user'>Create User</Link>
      </form>
    </div>
  )
};

export default Login;
