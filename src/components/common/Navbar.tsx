import { FC } from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/Navbar.scss';
export const Navbar: FC = () => {
  return (
    <>
      <nav>
        <div className='nav-logo'>
          <img
            src={`${process.env.PUBLIC_URL}/img/logo.png`}
            alt='Logo'
            className='logo'
          />
        </div>
        <ul className='nav-elements'>
          <li>
            <Link to='posts'>Posts</Link>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
