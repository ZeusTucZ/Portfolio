import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const featuredProjects = [
  {
    index: "01",
    title: "Proyecto destacado",
    description:
      "Espacio para tu proyecto principal. Resume el problema, tu solución y el impacto en una o dos frases.",
    tags: ["React", "UI System", "Performance"],
  },
  {
    index: "02",
    title: "Caso de estudio",
    description:
      "Usa esta tarjeta para mostrar una experiencia más estratégica: arquitectura, automatización o producto.",
    tags: ["Full Stack", "API", "DX"],
  },
  {
    index: "03",
    title: "Experimento creativo",
    description:
      "Ideal para una demo interactiva, una landing premium o cualquier pieza visual que demuestre criterio.",
    tags: ["Branding", "Motion", "Frontend"],
  },
];

const capabilities = [
  "Diseño y desarrollo de interfaces con personalidad",
  "Frontend moderno enfocado en detalle y performance",
  "Sistemas y productos web listos para escalar",
  "Narrativa visual clara para vender mejor tu trabajo",
];

function App() {
  return (
    <div className="portfolio-shell">
      <Navbar />
      <main className="portfolio-main">
        <Hero />

        <section className="section section-grid" id="about">
          <div className="section-heading">
            <span className="section-kicker">Sobre este portafolio</span>
            <h2>Una presencia digital pensada para que tu perfil se vea premium.</h2>
          </div>

          <div className="story-card">
            <p className="story-copy">
              Este bloque queda listo para que cuentes quién eres, qué tipo de
              proyectos disfrutas y qué te diferencia. La estructura ya está
              preparada para que solo reemplaces el texto.
            </p>
            <div className="story-stats">
              <div>
                <strong>+X</strong>
                <span>Proyectos para mostrar</span>
              </div>
              <div>
                <strong>+Y</strong>
                <span>Años de experiencia</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Editable a tu estilo</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <span className="section-kicker">Lo que puedes destacar</span>
            <h2>Sección lista para resumir tus fortalezas de forma clara.</h2>
          </div>

          <div className="capability-grid">
            {capabilities.map((item) => (
              <article className="capability-card" key={item}>
                <span className="capability-badge">Focus</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <span className="section-kicker">Proyectos</span>
            <h2>Tarjetas visuales preparadas para que agregues tus mejores casos.</h2>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article className="project-card" key={project.index}>
                <span className="project-index">{project.index}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section cta-panel" id="contact">
          <div>
            <span className="section-kicker">Siguiente paso</span>
            <h2>Deja aquí una invitación directa para colaborar contigo.</h2>
          </div>
          <p>
            Puedes reemplazar este texto por una propuesta corta: freelance,
            empleo, colaboraciones o proyectos personales.
          </p>
          <a className="primary-link" href="/contactme">
            Ir al formulario de contacto
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;
