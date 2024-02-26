import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import useOnline from "../utils/useOnline";

//contains logo
const Title = () => {
  return (
    <a href="/">
      <img className="h-24 p-4" alt="logo" src={Logo} />
    </a>
  );
};

//contains nav-bar
const Header = () => {
  const [isloggedin, setIsLoggedin] = useState(true);
  const isOnline = useOnline();

  return (
    <div className="flex justify-between bg-orange-200 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-6">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-6">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-6">Contact Us</li>
          </Link>
          <Link to="/instamart">
            <li className="px-6">InstaMart</li>
          </Link>
          <li className="px-6">Cart</li>
        </ul>
      </div>

      <h1 className="py-10">{isOnline ? "✅" : "🔴"}</h1>
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