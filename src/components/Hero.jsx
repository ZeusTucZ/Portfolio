import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <span className="hero-eyebrow">Personal brand</span>
        <h1 className="hero-title">
          Lorenzo Orrante Román
        </h1>
        <p className="hero-description">
          Este layout está construido para que presentes tus proyectos, tu
          perfil y tu propuesta de valor con una estética más editorial, más
          limpia y mucho más memorable.
        </p>

        <div className="hero-actions">
          <a className="hero-button hero-button-primary" href="#projects">
            Ver estructura
          </a>
          <a className="hero-button hero-button-secondary" href="/aboutme">
            Editar sobre mí
          </a>
        </div>
      </div>

      <div className="hero-showcase">
        <div className="showcase-orbit showcase-orbit-top" />
        <div className="showcase-orbit showcase-orbit-bottom" />

        <div className="showcase-card showcase-card-primary">
          <span>Perfil</span>
          <strong>Tu nombre aquí</strong>
          <p>Rol principal, especialidad y una frase de impacto.</p>
        </div>

        <div className="showcase-card showcase-card-secondary">
          <span>Proyecto favorito</span>
          <strong>Case study placeholder</strong>
          <p>Describe brevemente el proyecto que más quieres empujar.</p>
        </div>

        <div className="showcase-metrics">
          <div>
            <strong>Bold</strong>
            <span>Visual identity</span>
          </div>
          <div>
            <strong>Clean</strong>
            <span>Editable content</span>
          </div>
          <div>
            <strong>Sharp</strong>
            <span>Responsive layout</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
