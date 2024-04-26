import { useEffect, useState } from 'react';
import heroData from '../data';
import arrowIcon from '../images/icon-arrow.svg';
// import LeftArrowSVG from './LeftArrowSVG';
// import RightArrowSVG from './RightArrowSVG';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'; //<FaAngleLeft />
const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 375);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 375);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
          SHOP NOW <img src={arrowIcon} alt='arrow-image' />
        </a>
        <article className='hero__button-container'>
          <button
            type='button'
            className='button-prev'
            onClick={handlePrevClick}
          >
            <FaAngleLeft />
          </button>
          <button
            type='button'
            className='button-next'
            onClick={handleNextClick}
          >
            <FaAngleRight />
          </button>
        </article>
      </article>
    </section>
  );
};

export default Hero;
