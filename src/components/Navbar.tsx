const Navbar = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars" />
          </a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            href="#"
          >
            <i className="fas fa-user-circle fa-lg"></i> Hello : Adminstrator
          </a>
          <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
            <a href="#" className="dropdown-item">
              <i className="fas fa-user mr-2"></i>Profile
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <i className="fas fa-cog mr-2"></i>Settings
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <i className="fas fa-sign-out-alt mr-2"></i> Sign out
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
