import Link from "next/link";
import { useSelector } from "react-redux";

function Sidebar({ guessedPlayers }) {
  return (
    <div>
      <div className='sidebar'>
        <ul className='sidebar-nav'>
          <li className='sidebar-nav-item'>
            <Link href='/guess-eleven' className='sidebar-link'>
              <span className='sidebar-icon'>1</span>
              <span className='sidebar-text'>Guess 11</span>
            </Link>
          </li>
          <li className='sidebar-nav-item'>
            <Link href='/career-path' className='sidebar-link'>
              <span className='sidebar-icon'>2</span>
              <span className='sidebar-text'>Career Path</span>
            </Link>
          </li>
          <li className='sidebar-nav-item'>
            <Link href='/hidden-player' className='sidebar-link'>
              <span className='sidebar-icon'>3</span>
              <span className='sidebar-text'>Hidden Player</span>
            </Link>
          </li>
          <li className='sidebar-nav-item'>
            <Link href='/higher-lower' className='sidebar-link'>
              <span className='sidebar-icon'>4</span>
              <span className='sidebar-text'>Higher or Lower</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
