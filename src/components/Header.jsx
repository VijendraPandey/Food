import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";

//contains logo
const Title = () => {
  return (
    <a href="/">
      <img className="logo" alt="logo" src={Logo} />
    </a>
  );
};

//contains nav-bar
const Header = () => {
  const [isloggedin, setIsLoggedin] = useState(true);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>
      {isloggedin ? (
        <button
          onClick={() => {
            setIsLoggedin(false);
          }}
        >
          LogOut
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedin(true);
          }}
        >
          LogIn
        </button>
      )}
    </div>
  );
};

export default Header;
