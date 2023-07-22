import { useSelector } from "react-redux";

function Sidebar({ guessedPlayers }) {
  return (
    <div>
      <div className="sidebar">
        <ul className="sidebar-nav">
          <li className="sidebar-nav-item">
            <a href="#" className="sidebar-link">
              <span className="sidebar-icon">1</span>
              <span className="sidebar-text">Guess 11</span>
            </a>
          </li>
          <li className="sidebar-nav-item">
            <a href="#" className="sidebar-link">
              <span className="sidebar-icon">2</span>
              <span className="sidebar-text">Career Path</span>
            </a>
          </li>
          <li className="sidebar-nav-item">
            <a href="#" className="sidebar-link">
              <span className="sidebar-icon">3</span>
              <span className="sidebar-text">Hidden Player</span>
            </a>
          </li>
          <li className="sidebar-nav-item">
            <a href="#" className="sidebar-link">
              <span className="sidebar-icon">4</span>
              <span className="sidebar-text">Higher or Lower</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
