import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Hero</NavLink>
        </li>
        <li>
          <NavLink to='/graduate'>Graduate</NavLink>
        </li>
        {/* <li>
          <NavLink to='/products'>Products</NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default NavBar;
