import { useSelector } from "react-redux";
import { GiSoccerField } from "react-icons/gi";
import { FaRoute } from "react-icons/fa";
import { BsArrowDownUp } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa";
import Link from "next/link";

function Sidebar({ guessedPlayers }) {
  return (
    <div>
      <div className='sidebar'>
        <ul className='sidebar-nav'>
          <li className='sidebar-nav-item'>
            <Link href='/guess-eleven' className='sidebar-link'>
              <span className='sidebar-icon'>
                <GiSoccerField />
              </span>
              <span className='sidebar-text'>Guess 11</span>
            </Link>
          </li>
          <li className='sidebar-nav-item'>
            <Link href='/career-path' className='sidebar-link'>
              <span className='sidebar-icon'>
                <FaRoute />
              </span>
              <span className='sidebar-text'>Career Path</span>
            </Link>
          </li>
          <li className='sidebar-nav-item'>
            <Link href='/hidden-player' className='sidebar-link'>
              <span className='sidebar-icon'>
                <FaQuestion />
              </span>
              <span className='sidebar-text'>Blurred Player</span>
            </Link>
          </li>
          <li className='sidebar-nav-item'>
            <Link href='/higher-lower' className='sidebar-link'>
              <span className='sidebar-icon'>
                <BsArrowDownUp />
              </span>
              <span className='sidebar-text'>Higher or Lower</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
