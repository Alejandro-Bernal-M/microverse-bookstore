import { NavLink } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';

const Navbar = () => {
  const links = [
    { path: '/', text: 'Books' },
    { path: 'Categories', text: 'Categories' },
  ];

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Bookstore</h1>
      <ul className="nav-links">
        {links.map((item) => (
          <li key={item.text} className="nav-link">
            <NavLink to={item.path}>
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="nav-btn"
      >
        <BsFillPersonFill className="person" />
      </button>
    </nav>
  );
};

export default Navbar;
