import { NavLink } from 'react-router-dom';

const menuItems = [
  {
    label: 'Dashboard',
    path: '/',
  },
  {
    label: 'Departments',
    path: '/departments',
  },
  {
    label: 'Products',
    path: '/products',
  },
];

const MenuItem = ({ menuItem }) => {
  const { label, path } = menuItem;

  return (
    <NavLink to={path} className="menu-item">
      <span>{label}</span>
    </NavLink>
  );
};

const Sidebar = () => {
  return (
    <nav className="sidebar">
      {menuItems.map((item, id) => (
        <MenuItem menuItem={item} key={id} />
      ))}
    </nav>
  );
};

export default Sidebar;
