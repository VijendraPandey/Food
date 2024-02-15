import { useState } from "react";

//contains logo
const Title = () => {
  return (
    <img
      className="logo"
      alt="logo"
      src="https://wallpapercave.com/wp/wp11030601.jpg"
    />
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
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
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
