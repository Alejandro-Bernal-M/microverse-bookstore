import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { path: '/', text: 'Books' },
    { path: 'Categories', text: 'Categories' },
  ];

  return (
    <nav>
      <h1>Bookstore</h1>
      <ul>
        {links.map((item) => (
          <li key={item.text}>
            <NavLink to={item.path}>
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
