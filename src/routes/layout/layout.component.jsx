import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sign-in">Sign In</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet /> {/* This is where the nested route will render */}
    </div>
  );
};

export default Layout;