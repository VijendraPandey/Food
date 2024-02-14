const Title = () => {
  return (
    <img
      className="logo"
      alt="logo"
      src="https://wallpapercave.com/wp/wp11030601.jpg"
    />
  );
};

const Header = () => {
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
    </div>
  );
};

export default Header;
