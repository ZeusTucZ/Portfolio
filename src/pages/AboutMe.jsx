import Navbar from "../components/Navbar";
import "../App.css";

const timeline = [
  "Describe aquí tu enfoque, tus principios y el tipo de trabajo que te gusta hacer.",
  "Añade una mini historia sobre cómo aprendiste, qué te obsesiona o qué buscas construir.",
  "Incluye herramientas, industrias o retos en los que te mueves con más soltura.",
];

const AboutMe = () => {
  return (
    <div className="portfolio-shell">
      <Navbar />
      <main className="portfolio-main page-main">
        <section className="inner-hero">
          <span className="section-kicker">Sobre mí</span>
          <h1>Espacio listo para contar tu historia con intención.</h1>
          <p>
            Esta página queda estructurada para que escribas un perfil más
            humano, más personal y más estratégico que un simple resumen.
          </p>
        </section>

        <section className="section section-grid">
          <div className="info-panel">
            <h2>Tu narrativa</h2>
            <p>
              Sustituye este texto por tu presentación real: quién eres, qué
              resuelves y por qué alguien debería confiar en tu trabajo.
            </p>
          </div>

          <div className="timeline-panel">
            {timeline.map((item, index) => (
              <article className="timeline-item" key={item}>
                <span>0{index + 1}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutMe;
