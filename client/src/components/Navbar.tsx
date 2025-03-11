import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(false);

  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);  
    }
  };

  useEffect(() => {
    checkLogin();  
  }, [loginCheck]);  

  return (
    <div>
      <h1>
        Time Capsule Storage
      </h1>
      <div>
        {
          !loginCheck ? (
            <button className="btn" type='button'>
              <Link to='/login'>Login</Link>
            </button>
          ) : (
            <button className="btn" type='button' onClick={() => {
              auth.logout(); 
            }}>Logout</button>
          )
        }
      </div>
    </div>
  )
}
// function Navbar() {
//     return (
//       <nav>
//         <ul>
//           <li><a href="/">Home</a></li>
//           <li><a href="/about">About</a></li>
//           <li><a href="/time-capsule">Create Time Capsule</a></li>
//           <li><a href="/time-capsule-list">View Time Capsules</a></li>
//         </ul>
//       </nav>
//     );
//   }

export default Navbar;