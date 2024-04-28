import { useEffect, useState } from 'react';
import heroData from '../data';
import arrowIcon from '../images/icon-arrow.svg';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
const Hero = ({ setIsVisible }) => {
  const [index, setIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 375);

  useEffect(() => {
    let timeoutId;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.innerWidth > 1125) {
          setIsVisible(false);
        }
        setIsDesktop(window.innerWidth > 375);
      }, 200);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [setIsVisible]);

  const { title, desc } = heroData[index];
  const image = isDesktop
    ? heroData[index].desktopImage
    : heroData[index].mobileImage;

  const handlePrevClick = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? heroData.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setIndex((prevIndex) =>
      prevIndex === heroData.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <section className='hero'>
      <img className='hero__image' src={image} alt='furniture-image' />
      <article className='hero__info'>
        <h1 className='hero__info-title'>{title}</h1>
        <p className='hero__info-description'>{desc}</p>
        <a href='#' className='hero__info-arrowIcon'>
          SHOP NOW{' '}
          <img
            className='hero__info-arrowIcon'
            src={arrowIcon}
            alt='arrow-image'
          />
        </a>
        <article className='hero__button-container'>
          <button
            type='button'
            className='button-prev-page'
            onClick={handlePrevClick}
            aria-label='Previous slide'
          >
            <FaAngleLeft />
          </button>
          <button
            type='button'
            className='button-next-page'
            onClick={handleNextClick}
            aria-label='Next slide'
          >
            <FaAngleRight />
          </button>
        </article>
      </article>
    </section>
  );
};

export default Hero;
