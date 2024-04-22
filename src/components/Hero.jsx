import { useEffect, useState } from 'react';
import heroData from '../data';
import arrowIcon from '../images/icon-arrow.svg';
import rightArrow from '../images/icon-angle-right.svg';
import leftArrow from '../images/icon-angle-left.svg';

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
      <article className='hero__image'>
        <img src={image} alt='furniture-image' />
      </article>
      <article className='hero__info'>
        <h1 className='hero__info-title'>{title}</h1>
        <p className='hero__info-description'>{desc}</p>
        <a href='#' className='hero__info-arrowIcon'>
          SHOP NOW <img src={arrowIcon} alt='arrow-image' />
        </a>
      </article>
      <article className='hero__button-container'>
        <button className='prev-btn' onClick={handlePrevClick}>
          <img src={leftArrow} alt='left-arrow-image' />
        </button>
        <button className='next-btn' onClick={handleNextClick}>
          <img src={rightArrow} alt='right-arrow-image' />
        </button>
      </article>
    </section>
  );
};

export default Hero;
