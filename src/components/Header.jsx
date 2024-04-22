import logo from '../images/logo.svg';
import burgerIcon from '../images/icon-hamburger.svg';
import Navigation from './Navigation';
const Header = () => {
  return (
    <>
      <header className='header'>
        <figure className='header__logo'>
          <img src={logo} alt='logo-image' />
        </figure>
        <Navigation />
        <span className='burger-icon'>
          <img src={burgerIcon} alt='burger-menu-icon' />
        </span>
      </header>
    </>
  );
};

export default Header;
