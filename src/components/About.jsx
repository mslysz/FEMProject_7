import darkFurniture from '../images/image-about-dark.jpg';
import lightFurniture from '../images/image-about-light.jpg';

const About = () => {
  return (
    <section className='about'>
      <img
        className='about__image'
        src={darkFurniture}
        alt='dark-furniture-image'
      />
      <article className='about__info'>
        <h2 className='about__info-title'>ABOUT OUR FURNITURE</h2>
        <p className='about__info-description'>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </article>
      <img
        className='about__image'
        src={lightFurniture}
        alt='light-furniture-image'
      />
    </section>
  );
};

export default About;
