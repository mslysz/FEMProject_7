import { useState } from 'react';
import furniture from '../data';
import arrowIcon from '../images/icon-arrow.svg';
import rightArrow from '../images/icon-angle-right.svg';
import leftArrow from '../images/icon-angle-left.svg';

const Hero = () => {
  const [index, setIndex] = useState(0);
  const { image, title, desc } = furniture[index];
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
        <button className='prev-btn'>
          <img src={leftArrow} alt='left-arrow-image' />
        </button>
        <button className='next-btn'>
          <img src={rightArrow} alt='right-arrow-image' />
        </button>
      </article>
    </section>
  );
};

export default Hero;
