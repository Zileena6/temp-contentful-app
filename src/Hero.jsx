import heroImg from './assets/hero2.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Disrupt same raclette viral non biodiesel. Kombucha poke cupping
            reprehenderit unicorn blue bottle meh disrupt. Polaroid nisi narwhal
            chia. Enamel pin meggings Brooklyn cornhole bodega boys crucifix
            kombucha asymmetrical, pop-up minim man bun tacos jianbing.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman nad the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
