import logo from '../images/logo.svg';
import burgerIcon from '../images/icon-hamburger.svg';
import Navigation from './Navigation';
import closeIcon from '../images/icon-close.svg';
import PropTypes from 'prop-types';

const Header = ({ isVisible, setIsVisible }) => {
  const switchMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <header className='header'>
        <span
          className={isVisible ? 'burger-icon--hidden' : 'burger-icon'}
          onClick={switchMenu}
        >
          <img src={burgerIcon} alt='burger-menu-icon' />
        </span>
        <figure className={isVisible ? 'header__logo--hidden' : 'header__logo'}>
          <img className='logo-image' src={logo} alt='logo-image' />
        </figure>
        <span
          className={isVisible ? 'close-icon--visible' : 'close-icon'}
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          <img src={closeIcon} alt='x-icon' />
        </span>

        <Navigation isVisible={isVisible} />
      </header>
    </>
  );
};
Header.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
};

export default Header;
