const Navigation = ({ isVisible }) => {
  return (
    <nav className={isVisible ? 'nav nav__visible' : 'nav'}>
      <ul className='nav__list'>
        <li className='nav__item'>
          <a href='#' className='nav__link'>
            home
          </a>
        </li>
        <li className='nav__item'>
          <a href='#' className='nav__link'>
            shop
          </a>
        </li>
        <li className='nav__item'>
          <a href='#' className='nav__link'>
            about
          </a>
        </li>
        <li className='nav__item'>
          <a href='#' className='nav__link'>
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
