import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
        <div className='container'>
          <Link to='/' className='navbar-brand'></Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarCollapse'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item active'>
                <Link to='/' className='nav-link'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/about' className='nav-link'>
                  About Us
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/services' className='nav-link'>
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/blog' className='nav-link'>
                  Blog
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/contact' className='nav-link'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
