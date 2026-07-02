import "../styles/Navbar.css";

function Navbar({ onMenuClick }) {
  return (
    <div className="navbar">
      <div className="navbarLeft">
        <button className="mobileMenuBtn" onClick={onMenuClick}>
          ☰
        </button>

        <select className="companySelect">
          <option>Gracia Advisory Group</option>
        </select>
      </div>

      <div className="navIcons">
        <span>🔔</span>
        <span>👤</span>
      </div>
    </div>
  );
}

export default Navbar;