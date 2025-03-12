import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';
import '../index.css'

const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  const closeNavbar = () => {
    setIsActive(false);
  };

  const checkLogin = () => {
    console.log(auth.loggedIn())
    if (auth.loggedIn()) {
      console.log('Login set to true');
      setLoginCheck(true);  
    }
  };

  // Run checkLogin on mount and when login status changes
  useEffect(() => {
    checkLogin(); // Check login on component mount
    // Listen for changes in localStorage (from login or logout)
    const handleStorageChange = () => {
      checkLogin();  // Re-check login status whenever localStorage changes
    };

    window.addEventListener('storage', handleStorageChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);  // Empty dependency array so it runs only on mount

  return (
    <div>
        {
          !loginCheck ? (
            <Link to="/" className="navbar-item has-text-white is-size-5 has-text-weight-bold">
                  Cat Capsules
            </Link>
          ) : (
            <>
            <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                {/* Website Title */}
                <Link to="/home" className="navbar-item has-text-white is-size-5 has-text-weight-bold">
                  Cat Capsules
                </Link>

                {/* Hamburger Button */}
                <a 
                  role="button" 
                  className={`navbar-burger ${isActive ? 'is-active' : ''}`} 
                  aria-label="menu" 
                  aria-expanded="false" 
                  onClick={toggleNavbar}
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>

              {/* Dropdown Menu */}
              <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <div className="navbar-end">
                  <Link to="/home" className="navbar-item" onClick={closeNavbar}>
                    Home
                  </Link>
                  <Link to="/time-capsule" className="navbar-item" onClick={closeNavbar}>
                    Create Time Capsule
                  </Link>
                  <button className="btn is-black" type='button' onClick={() => {auth.logout();}}>Logout</button>
                </div>
              </div>
            </nav>
            </>
          )
      }
    </div>
  );
}

export default Navbar;