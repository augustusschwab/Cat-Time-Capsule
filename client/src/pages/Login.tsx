import { useState, FormEvent, ChangeEvent } from "react";
import Auth from "../utils/auth";
import { login } from "../api/auth";  
import { UserLogin } from "../interfaces/UserLogin";
import '../index.css';

const Login = () => {
  const [loginData, setLoginData] = useState<UserLogin>({
    username: '',
    password: ''
  });

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
    } catch (err) {
      console.error('Failed to login', err); 
    }
  };

  return (

    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-4">
            <h1 className="title has-text-centered">Login</h1>

            <form action="/login" method="POST" onSubmit={handleSubmit}>
              {/* Username Field */}
              <div className="field">
                <label className="label">Username</label>
                <div className="control has-icons-left">
                  <input 
                    className="input"
                    type='text'
                    name='username'
                    value={loginData.username || ''}
                    onChange={handleChange}
                    placeholder="Enter your username" 
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </div>

              {/* Password Field */}
              <div className="field">
                <label className="label">Password</label>
                <div className="control has-icons-left">
                  <input 
                    className="input" 
                    type='password'
                    name='password'
                    value={loginData.password || ''}
                    onChange={handleChange}
                    placeholder="Enter your password" 
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="field">
                <div className="control">
                  <button className="button is-primary is-fullwidth" onSubmit={handleSubmit}>
                    Login
                  </button>
                </div>
              </div>

              {/* Forgot Password Link */}
              <p className="has-text-centered">
                <a href="/forgot-password" className="is-size-7">Forgot your password?</a>
              </p>
            </form>

          </div>
        </div>
      </div>
    </section>
  )
};

export default Login;
