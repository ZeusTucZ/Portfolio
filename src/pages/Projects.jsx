import Navbar from "../components/Navbar";
import "../App.css";

const projects = [
  {
    title: "Elyos Racing Team",
    summary: "End-to-end web page for a telemetry system in a racing team",
  },
  {
    title: "Nutrition App",
    summary:
      "Aquí puedes hablar de producto, arquitectura, diseño o negocio.",
  },
  {
    title: "Smart Mirror",
    summary:
      "Buen espacio para demos visuales, dashboards o piezas interactivas.",
  },
  {
    title: "Proyecto cuatro",
    summary:
      "También sirve para agrupar trabajos pequeños o experimentos creativos.",
  },
];

const Projects = () => {
  return (
    <div className="portfolio-shell">
      <Navbar />
      <main className="portfolio-main page-main">
        <section className="inner-hero">
          <span className="section-kicker">Project Archive</span>
        </section>

        <section className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <span className="project-index">0{index + 1}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="project-tags">
                <span>Case Study</span>
                <span>UI</span>
                <span>Impacto</span>
              </div>
            </article>
          ))}
        </section>

        <section className="inner-hero certificates">
          <span className="section-kicker">Certificates</span>
        </section>
      </main>
    </div>
  );
};

export default Projects;
