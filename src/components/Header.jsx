import logo from '../images/logo.svg';
import burgerIcon from '../images/icon-hamburger.svg';
import Navigation from './Navigation';
import { useState } from 'react';
import closeIcon from '../images/icon-close.svg';
import Modal from './Modal';
const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

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
          <img src={logo} alt='logo-image' />
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
        <Modal isVisible={isVisible} />
      </header>
    </>
  );
};

export default Header;
