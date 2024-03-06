const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        {/* <img className="image-logo" src="src\assets\logo_image.jpg" alt="logo" /> */}
      </div>
      <ul>
        <li href="#">Jobs</li>
        <li href="#">PeerConnection</li>
        <li href="#">InfoDesk</li>
        <li href="#">About Us</li>
      </ul>

      <button className="nav-btn">Login</button>
    </nav>
  );
};

export default Navigation;
